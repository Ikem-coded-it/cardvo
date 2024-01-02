const createComment = 'INSERT INTO comments (comment, user_id, card_design_id, created_at) VALUES ($1, $2, $3, $4) RETURNING id, comment, user_id, card_design_id, created_at';

const getCommentsById = 'SELECT comments.id, comments.comment, comments.created_at, users.full_name, users.photo_url FROM comments JOIN users ON comments.user_id=users.id WHERE card_design_id = $1 LIMIT 2 OFFSET $2';

module.exports = {
  createComment,
  getCommentsById
}