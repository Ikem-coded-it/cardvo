const getAllCardDesigns = 'SELECT * FROM card_designs';

const getCardDesignByNumber = 'SELECT * FROM card_designs WHERE card_number_one = $1 AND card_number_two = $2 AND card_number_three = $3 AND card_number_four = $4';

const createDesign = 'INSERT INTO card_designs (card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv, category';

const getCardDesignById = 'SELECT * FROM card_designs WHERE id = $1';

const updateCardDesignById = 'UPDATE card_designs SET card_holder_name = $1, card_number_one = $2, card_number_two = $3, card_number_three = $4, card_number_four = $5, expiration = $6, color = $7, background_image = $8, cvv = $9, category = $10 WHERE id = $11 RETURNING id, card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv, category';

module.exports = {
  getAllCardDesigns,
  getCardDesignByNumber,
  createDesign,
  getCardDesignById,
  updateCardDesignById
}