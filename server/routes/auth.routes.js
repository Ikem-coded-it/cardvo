const router = require("express").Router();
const { 
  getAllUsers,
  registerUser,
  initializeLocalStrategy,
  initializeGoogleStrategy,
  initializeFacebookStrategy,
} = require("../controllers/auth.controller");
const passport = require('passport');

initializeLocalStrategy()
initializeGoogleStrategy()
initializeFacebookStrategy()

router.get("/", getAllUsers);

// register with email and password
router.post("/register", registerUser);

// login with email and password
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: req.user
  })
});

// Google login and redirect routes
router.get('/login/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/api/v1/auth/login/failed"
  })
);

// Facebook login and redirect routes
router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: process.env.CLIENT_URL,
  failureRedirect: "/api/v1/auth/login/failed"
}));


// check if logged in
router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: req.user
    })
  } else {
    res.status(403).json({
      success: false,
      message: "Unauthorized"
    })
  }
})

router.get('/login/failed', (req, res) => {
  if (req.user) {
    res.status(400).json({
      success: false,
      message: "Login failed"
    })
  }
})

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