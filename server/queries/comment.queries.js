const createComment = 'INSERT INTO comments (comment, user_id, card_design_id, created_at) VALUES ($1, $2, $3, $4) RETURNING id, comment, user_id, card_design_id, created_at';

module.exports = {
  createComment,
}