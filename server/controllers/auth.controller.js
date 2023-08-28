const { pool, poolAsyncQuery } =  require("../config/db");
const queries = require("../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const LocalStrategy = require('passport-local');
const { validateSignUp  } = require("../utils/validator");

const getAllUsers = asyncHandler((req, res) => {
  pool.query(queries.getAllUsers, (err, result) => {
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

  const existingUser = await poolAsyncQuery(queries.getUserByEmail, [value.email]);

  if (existingUser.rows[0].email) {
    return res.status(400).json({
      success: false,
      message: "User with this email already exists"
    })
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(value.password, saltRounds);

  const result = await poolAsyncQuery(
    queries.registerUser,
    [value.fullName, value.email, hashedPassword, new Date().toISOString()]
  )

  if (!result || result instanceof Error) {
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
    pool.query(queries.getUserByEmail, [email], (err, result) => {
      if (err) return done(err);
      const user = result.rows[0];
      if (!user) return done(null, false);

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
      pool.query(queries.getUserByEmail, [user.username], (err, result) => {
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
    callbackURL: '/api/v1/auth/google/callback',
    scope: [ 'profile' ]
  }, function verify(issuer, profile, done) {
    // search for user credentials in google db
    pool.query(queries.getFederatedCredentials, [ 
      issuer,
      profile.id
    ], function(err, result) {
      if (err) return done(err);

      const googleUser = result.rows[0];

      // if user not in google db, create user in local db
      if (!googleUser) {
        
        pool.query(queries.registerUser, [
          profile.displayName,
          profile.emails[0].value,
          "none",
          new Date().toISOString()
        ], function(err, result) {
          if (err) return done(err);

          // store locally created user in google db with same id
          const id = result.rows[0].id;
          pool.query(queries.createFederatedCredential, [
            id,
            issuer,
            profile.id
          ], function(err) {
            if (err) return done(err);

            const user = result.rows[0];
            return done(null, user);
          });
        });

        // we found user in google db, use id and search for him in local db
      } else {
        pool.query(queries.getUserById, [ googleUser.user_id ], function(err, result) {
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
  initializeGoogleStrategy
};