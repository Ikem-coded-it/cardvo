const {
  getAllCardDesigns,
  createCardDesign,
  getCardDesignById,
  updateCardDesignById,
  deleteCardDesignById,
  getCardDesignByCategory,
  likeOrUnlikeCardDesign,
  checkIfUserLikedCard
} = require("../controllers/cardDesign.controller");
const { upload } = require("../utils/cloudinary");
const router = require('express').Router();

router.route('/').get(getAllCardDesigns);

router.route('/create').post(upload.single('background_image'), createCardDesign);

router.route('/:id').get(getCardDesignById);

router.route('/category/:category').get(getCardDesignByCategory);

router.route('/:id/update').put(upload.single('background_image'), updateCardDesignById)

router.route('/:id/delete').delete(deleteCardDesignById);

router.route('/:id/toggle-like').post(likeOrUnlikeCardDesign);

router.route('/:id/check-if-liked').post(checkIfUserLikedCard);

module.exports = router;