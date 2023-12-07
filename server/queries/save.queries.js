const saveCard = 'INSERT INTO saved_cards (user_id, card_design_id) VALUES ($1, $2)';
const unsaveCard = 'DELETE FROM saved_cards WHERE user_id = $1 AND card_design_id = $2';

module.exports = { saveCard, unsaveCard }