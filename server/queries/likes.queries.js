const createLike = 'INSERT INTO likes (user_id, card_design_id) VALUES ($1, $2)';
const deleteLike = 'DELETE FROM likes WHERE user_id = $1 AND card_design_id = $2';
const getLikedCardsByUserId = 'SELECT likes.id, card_designs.id, card_designs.card_holder_name, card_designs.card_number_one, card_designs.card_number_two, card_designs.card_number_three, card_designs.card_number_four, card_designs.expiration, card_designs.color, card_designs.background_image FROM likes JOIN card_designs ON likes.card_design_id = card_designs.id WHERE likes.user_id = $1';


module.exports = { createLike, deleteLike, getLikedCardsByUserId }