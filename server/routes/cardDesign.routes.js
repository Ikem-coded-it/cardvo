const {
  getAllCardDesigns
} = require("../controllers/cardDesign.controller");
const router = require('express').Router();

router.route('/').get(getAllCardDesigns);

module.exports = router;