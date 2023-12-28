const {
  getAllCardDesigns,
  createCardDesign,
  getCardDesignById,
  updateCardDesignById,
  deleteCardDesignById,
  getCardDesignByCategory,
  likeOrUnlikeCardDesign,
  checkIfUserLikedCard,
  saveOrUnsaveCard,
  checkIfUserSavedCard,
  createCardForUsersCollection
} = require("../controllers/cardDesign.controller");
const { upload } = require("../utils/cloudinary");
const isAuth = require("../middleware/auth");
const router = require('express').Router();

router.use(isAuth);

router.route('/').get(getAllCardDesigns);

router.route('/create').post(upload.single('background_image'), createCardDesign);

router.route('/:id').get(getCardDesignById);

router.route('/category/:category').get(getCardDesignByCategory);

router.route('/:id/update').put(upload.single('background_image'), updateCardDesignById)

router.route('/:id/delete').delete(deleteCardDesignById);

router.route('/:id/toggle-like').post(likeOrUnlikeCardDesign);

router.route('/:id/check-if-liked').post(checkIfUserLikedCard);

router.route('/:id/toggle-save-card').post(saveOrUnsaveCard);

router.route('/:id/check-if-saved').post(checkIfUserSavedCard);

router.route('/add-to-collection').post(upload.single('background_image'), createCardForUsersCollection);

module.exports = router;