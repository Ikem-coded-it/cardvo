const { createComment, getCommentsById } = require("../queries/comment.queries");
const { dbAsyncQuery } = require("../config/db");
const { validateComment } = require("../utils/validator");
const getDifferenceInTime = require("../utils/timeFormater");
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

  const result = await dbAsyncQuery(createComment, [
    comment,
    userId,
    cardDesignId,
    new Date().toISOString()
  ]);

  if (!result || result instanceof Error) {
    return res.status(400).json({
      success: false,
      message: "Failed to post comment"
    })
  }

  const postedComment = result.rows[0];
  postedComment.created_at = getDifferenceInTime(postedComment.created_at)

  return res.status(201).json({
    success: true,
    message: "Comment posted successfully",
    postedComment: postedComment
  })
})

const getPaginatedCardComments = asyncHandler(async(req, res) => {
  const { id, offset } = req.params;
  const cardComments = await dbAsyncQuery(getCommentsById, [id, offset])

  const comments = cardComments.rows

  comments.map(comment => {
    comment.created_at = getDifferenceInTime(comment.created_at);
  })

  return res.status(200).json({
    success: true,
    data: comments
  })
})

module.exports = {
  postComment,
  getPaginatedCardComments
}