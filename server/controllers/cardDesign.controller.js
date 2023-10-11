const { db, dbAsyncQuery } =  require("../config/db");
const queries = require("../queries/cardDesign.queries");
const asyncHandler = require("express-async-handler");
const { validateCardDetails } = require("../utils/validator");
const { cloudinaryDelete } = require("../utils/cloudinary");

const getAllCardDesigns = asyncHandler(async(req, res) => {
  const cardDesigns = await dbAsyncQuery(queries.getAllCardDesigns);
  if (!cardDesigns.rows) {
    return res.status(400).json({
      success: false,
      message: "Could not find any card designs"
    })
  }

  return res.status(200).json({
    success: true,
    data: cardDesigns.rows
  })
})

const createCardDesign = asyncHandler(async(req, res) => {
  if (req.file) {
    req.body.background_image = req.file.path
  }
  
  const {error, value} = validateCardDetails(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const existingCardDesign = await dbAsyncQuery(queries.getCardDesignByNumber, [
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
  ]);

  if (existingCardDesign.rows.length) {
    return res.status(400).json({
      success: false,
      message: "Card with this number already exists"
    })
  }

  const createdDesign = await dbAsyncQuery(queries.createDesign, [
    value.name,
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
    value.expiration,
    value.color,
    value.background_image,
    value.cvv,
    value.category
  ]);

  if (!createdDesign || createdDesign instanceof Error) {
    return res.status(400).json({
      success: false,
      message: "Failed to upload card design"
    })
  }

  return res.status(201).json({
    success: true,
    message: "Card design uploaded successfully",
    createdDesign: createdDesign.rows
  })
})

const getCardDesignById = asyncHandler(async(req, res) => {
  const { id } = req.params;
  const cardDesign = await dbAsyncQuery(queries.getCardDesignById, [id]);
  if (!cardDesign.rows) {
    return res.status(404).json({
      success: false,
      message: "Card design not found"
    })
  }

  return res.status(200).json({
    success: true,
    data: cardDesign.rows
  })
})

const updateCardDesignById = asyncHandler(async(req, res) => {
  const { id } = req.params;

  if (req.file) {
    const { rows } = await dbAsyncQuery(queries.getCardDesignById, [id]);
    const oldBackgroundImage = rows[0].background_image;
    if (oldBackgroundImage.includes('cloudinary')) {
      await cloudinaryDelete(oldBackgroundImage);
    }

    req.body.background_image = req.file.path
  }

  const {error, value} = validateCardDetails(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const existingCardDesign = await dbAsyncQuery(queries.getCardDesignByNumber, [
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
  ]);

  if (existingCardDesign.rows.length) {
    return res.status(400).json({
      success: false,
      message: "Card with this number already exists"
    })
  }

  const updatedDesign = await dbAsyncQuery(queries.updateCardDesignById, [
    value.name,
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
    value.expiration,
    value.color,
    value.background_image,
    value.cvv,
    value.category,
    id
  ]);

  if (!updatedDesign || updatedDesign instanceof Error) {
    return res.status(400).json({
      success: false,
      message: "Failed to update card design"
    })
  }

  return res.status(200).json({
    success: true,
    message: "Card design updated successfully",
    createdDesign: updatedDesign.rows
  })
})

module.exports = {
  getAllCardDesigns,
  createCardDesign,
  getCardDesignById,
  updateCardDesignById
}