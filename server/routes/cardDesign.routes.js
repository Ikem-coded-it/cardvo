const {
  getAllCardDesigns,
  createCardDesign,
  getCardDesignById,
  updateCardDesignById
} = require("../controllers/cardDesign.controller");
const { upload } = require("../utils/cloudinary");
const router = require('express').Router();

router.route('/').get(getAllCardDesigns);

router.route('/create').post(upload.single('background_image'), createCardDesign);

router.route('/:id').get(getCardDesignById);

router.route('/:id/update').put(upload.single('background_image'), updateCardDesignById)

module.exports = router;