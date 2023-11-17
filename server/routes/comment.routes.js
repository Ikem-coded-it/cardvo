const { postComment, getCardComments } = require("../controllers/comment.controller");
const router = require("express").Router();

router.route("/create").post(postComment);

router.route("/:id").get(getCardComments);

module.exports = router;