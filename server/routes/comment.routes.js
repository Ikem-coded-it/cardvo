const { postComment } = require("../controllers/comment.controller");
const router = require("express").Router();

router.route("/create").post(postComment);

module.exports = router;