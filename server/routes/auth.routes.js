const router = require("express").Router();
const { registerUser, loginUser, editUser} = require("../controllers/auth/email-password");
const { upload } = require("../utils/cloudinary");
const { refreshUserToken } = require("../controllers/auth/refreshToken");
const { logout } = require("../controllers/auth/logout");
const isAuth = require("../middleware/auth");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/refresh-token", refreshUserToken);

router.put("/:id/edit", isAuth, upload.single("profile_picture"), editUser);

router.get("/logout", logout);

module.exports = router;