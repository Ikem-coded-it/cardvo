const saveCard = 'INSERT INTO saved_cards (user_id, card_design_id) VALUES ($1, $2)';
const unsaveCard = 'DELETE FROM saved_cards WHERE user_id = $1 AND card_design_id = $2';

const getSavedCardsByUserId = 'SELECT saved_cards.id, card_designs.id, card_designs.card_holder_name, card_designs.card_number_one, card_designs.card_number_two, card_designs.card_number_three, card_designs.card_number_four, card_designs.expiration, card_designs.color, card_designs.background_image FROM saved_cards JOIN card_designs ON saved_cards.card_design_id = card_designs.id WHERE saved_cards.user_id = $1';

module.exports = { saveCard, unsaveCard, getSavedCardsByUserId }