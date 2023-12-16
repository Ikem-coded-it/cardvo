const { db, dbAsyncQuery } =  require("../config/db");
const queries = require("../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook');
const { validateSignUp  } = require("../utils/validator");

const getAllUsers = asyncHandler((req, res) => {
  db.query(queries.getAllUsers, (err, result) => {
    return res.status(200).json({
      success: true,
      data: result.rows
    });
  })
});

const registerUser = asyncHandler(async(req, res) => {
  const { fullName, password, email } = req.body;
  const {error, value} = await validateSignUp({fullName, email, password});

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const existingUser = await dbAsyncQuery(queries.getUserByEmail, [value.email]);

  if (existingUser.rows.length) {
    return res.status(400).json({
      success: false,
      message: "User with this email already exists"
    })
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(value.password, saltRounds);

  const result = await dbAsyncQuery(
    queries.registerUser,
    [
      value.fullName, value.email,
      hashedPassword, new Date().toISOString(),
      "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg"
    ]
  )

  if (!result || result instanceof Error) {
    console.log(result)
    return res.status(400).json({
      success: false,
      error: result.message
    })
  }
  
  return res.status(201).json({
    success: true,
    message: "Registration successful",
    data: result.rows
  })
});

const initializeLocalStrategy = () => {
  passport.use(new LocalStrategy(
    {usernameField:'email'},
    function verify(email, password, done) {
      // query db for user
      db.query(queries.getUserByEmail, [email], (err, result) => {
        if (err) return done(err);
        const user = result.rows[0];
        if (!user) return done(null, false);

        // confirm password
        bcrypt.compare(password, user.pass_word, function(err, result) {
          if (err) return done(err);
          if (!result) return done(null, false); // Passwords don't match
          return done(null, user); // Successful authentication
        })
      })
    }));

  passport.serializeUser(function(user, done) {
    process.nextTick(function() {
      done(null, { id: user.id, username: user.email});
    });
  });

  passport.deserializeUser(function(user, done) {
    process.nextTick(function() {
      db.query(queries.getUserByEmail, [user.username], (err, result) => {
        if (err) throw err
        const deserializedUser = result.rows[0];
        return done(null, deserializedUser);
      })
    });
  });

}

const initializeGoogleStrategy = () => {
  passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: process.env['GOOGLE_CALLBACK_URL'],
    scope: [ 'profile' ]
  }, function verify(issuer, profile, done) {
    // search for user credentials in socials db
    db.query(queries.getFederatedCredentials, [ 
      issuer,
      profile.id
    ], function(err, result) {
      if (err) return done(err);

      const googleUser = result.rows[0];

      // if user not in socials db, create user in local db
      if (!googleUser) {
        db.query(queries.registerUser, [
          profile.name.givenName + ' ' + profile.name.familyName,
          issuer, // used as email field
          "none", // all google signees have "none" as password
          new Date().toISOString(),
          "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg"
        ], function(err, result) {
          if (err) return done(err);

          // store locally created user in socials db with same id
          const id = result.rows[0].id;
          db.query(queries.createFederatedCredential, [
            id,
            issuer,
            profile.id
          ], function(err) {
            if (err) return done(err);

            const user = result.rows[0];
            return done(null, user);
          });
        });

        // we found user in socials db, use id and search for him in local db
      } else {
        db.query(queries.getUserById, [ googleUser.user_id ], function(err, result) {
          if (err) return done(err);

          const user = result.rows[0]
          if (!user) return done(null, false);
          return done(null, user);
        });
      }
    });
  }));

  passport.serializeUser(function(user, done) {
    process.nextTick(function() {
      done(null, { id: user.id, username: user.email});
    });
  });

  passport.deserializeUser(function(user, done) {
    process.nextTick(function() {
      return done(null, user);
    });
  });
}

const initializeFacebookStrategy = () => {
  passport.use(new FacebookStrategy({
    clientID: process.env['FACEBOOK_CLIENT_ID'],
    clientSecret: process.env['FACEBOOK_CLIENT_SECRET'],
    callbackURL: '/api/v1/auth/facebook/callback',
    state: true
  }, function verify(accessToken, refreshToken, profile, done) {
    // search for user credentials in socials db
    db.query(queries.getFederatedCredentials, [
      'https://www.facebook.com',
      profile.id
    ], function(err, result) {
      if (err) return done(err);

      const facebookUser = result.rows[0];
      
      if (!facebookUser) {
        db.query(queries.registerUser, [
          profile.displayName,
          // facebook does not provide email so store displayname prefixed with 'facebook' instead
          `${profile.provider}-${profile.displayName}`,
          "none",
          new Date().toISOString(),
          "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg"
        ], function(err, result) {
          if (err) return done(err);

          // store locally created user in socials db with same id
          const id = result.rows[0].id;
           db.query(queries.createFederatedCredential, [
            id,
            'https://www.facebook.com',
            profile.id
          ], function(err) {
            if (err) return done(err);
            const user = result.rows[0];
            return done(null, user);
          });
        });

        // we found user in socials db, use id and search for him in local db
      } else {
        db.query(queries.getUserById, [ facebookUser.user_id ], function(err, result) {
          if (err) return done(err);

          const user = result.rows[0]
          if (!user) return done(null, false);
          return done(null, user);
        });
      }
    });
  }));

  passport.serializeUser(function(user, done) {
    process.nextTick(function() {
      done(null, { id: user.id, username: user.email});
    });
  });

  passport.deserializeUser(function(user, done) {
    process.nextTick(function() {
      return done(null, user);
    });
  });
}

module.exports = {
  getAllUsers,
  registerUser,
  initializeLocalStrategy,
  initializeGoogleStrategy,
  initializeFacebookStrategy
};