const { createComment, getCommentsById } = require("../queries/comment.queries");
const { dbAsyncQuery, db } = require("../config/db");
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
  const {id} = req.params;
  const cardComments = await dbAsyncQuery(getCommentsById, [id])

  return res.status(200).json({
    success: true,
    data: cardComments.rows
  })
})

module.exports = {
  postComment,
  getCardComments
}