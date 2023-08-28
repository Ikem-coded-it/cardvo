const router = require("express").Router();
const { 
  getAllUsers,
  registerUser,
  initializeLocalStrategy,
  initializeGoogleStrategy
} = require("../controllers/auth.controller");
const passport = require('passport');

initializeLocalStrategy()
initializeGoogleStrategy()

router.get("/", getAllUsers);
router.post("/register", registerUser);

// Username and password login route
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: req.user
  })
});

// Google login and redirect routes
router.get('/login/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', passport.authenticate('google'), function(req, res) {
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: req.user
  })
});


// logout
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