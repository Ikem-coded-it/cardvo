const { createComment, getCommentsById } = require("../queries/comment.queries");
const { dbAsyncQuery } = require("../config/db");
const { validateComment } = require("../utils/validator");
const asyncHandler = require("express-async-handler");

const postComment = asyncHandler(async(req, res) => {
  const { error, value } = validateComment(req.body);

  if(error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const { userId, comment, cardDesignId } = value;

  const postedComment = await dbAsyncQuery(createComment, [
    comment,
    userId,
    cardDesignId,
    new Date().toISOString()
  ]);

  if (!postedComment || postedComment instanceof Error) {
    return res.status(400).json({
      success: false,
      message: "Failed to post comment"
    })
  }

  return res.status(201).json({
    success: true,
    message: "Comment posted successfully",
    postedComment: postedComment.rows[0]
  })
})

const getCardComments = asyncHandler(async(req, res) => {
  console.log("here1")
  const {id} = req.params;
  console.log("here2", id)
  const cardComments = await dbAsyncQuery(getCommentsById, [id])
  console.log("here3")
  if (cardComments.rows.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No comments available"
    })
  }
  console.log("here4")
  return res.status(200).json({
    success: true,
    data: cardComments.rows
  })
})

module.exports = {
  postComment,
  getCardComments
}