const router = require("express").Router();
const { registerUser, loginUser} = require("../controllers/auth/email-password");
const { refreshUserToken } = require("../controllers/auth/refreshToken");
const { logout } = require("../controllers/auth/logout");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/refresh-token", refreshUserToken)

router.get("/logout", logout)

module.exports = router;