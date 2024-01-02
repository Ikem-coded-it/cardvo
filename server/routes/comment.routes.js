const { postComment, getPaginatedCardComments } = require("../controllers/comment.controller");
const isAuth = require("../middleware/auth");
const router = require("express").Router();

router.use(isAuth);

router.route("/post").post(postComment);

router.route("/:id/:offset").get(getPaginatedCardComments);

module.exports = router;