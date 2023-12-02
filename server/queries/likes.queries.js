const createLike = 'INSERT INTO likes (user_id, card_design_id) VALUES ($1, $2)';
const deleteLike = 'DELETE FROM likes WHERE user_id = $1 AND card_design_id = $2';

module.exports = { createLike, deleteLike }