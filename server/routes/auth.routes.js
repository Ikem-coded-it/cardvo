const router = require("express").Router();
const { 
  getAllUsers,
  registerUser,
} = require("../controllers/auth.controller");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { pool } = require("../config/db");
const queries = require("../queries/auth.queries");
const bcrypt = require("bcrypt");


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

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: req.user
  })
});
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) return next(err);
    res.status(200).json({
      success: true,
      message: "Logout successful"
    });
  });
});

module.exports = router;