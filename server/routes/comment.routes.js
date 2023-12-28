const { postComment, getCardComments } = require("../controllers/comment.controller");
const isAuth = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuth);

router.route("/create").post(postComment);

router.route("/:id").get(getCardComments);

module.exports = router;