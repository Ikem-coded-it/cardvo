const { db, dbAsyncQuery } =  require("../config/db");
const queries = require("../queries/cardDesign.queries");
const asyncHandler = require("express-async-handler");
const { validateCardDetails, validateUserCollectionCardDetails } = require("../utils/validator");
const { cloudinaryDelete } = require("../utils/cloudinary");
const formatDate = require("../utils/dateFormater");
const { deleteLike, createLike } = require("../queries/likes.queries");
const { saveCard, unsaveCard } = require("../queries/save.queries");

const getAllCardDesigns = asyncHandler(async(req, res) => {
  const cardDesigns = await dbAsyncQuery(queries.getAllCardDesigns);
  if (!cardDesigns.rows) {
    return res.status(400).json({
      success: false,
      message: "Could not find any card designs"
    })
  }

  const formatedRows = []
  cardDesigns.rows.forEach(row => {
    const { expiration } = row;
    const formatedDate = formatDate(expiration);
    row['expiration'] = formatedDate
    formatedRows.push(row)
  })

  return res.status(200).json({
    success: true,
    data: formatedRows
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
  const { rows } = await dbAsyncQuery(queries.getCardDesignById, [id]);
  if (!rows.length) {
    return res.status(404).json({
      success: false,
      message: "Card design not found"
    })
  }

  const unformatedDate = rows[0]['expiration']
  const formatedDate = formatDate(unformatedDate);
  rows[0]['expiration'] = formatedDate;

  return res.status(200).json({
    success: true,
    data: rows[0]
  })
})

const getCardDesignByCategory = asyncHandler(async(req, res) => {
  const { category } = req.params;
  const { rows } = await dbAsyncQuery(queries.getCardDesignByCategory, [category]);
  if (!rows.length) {
    return res.status(404).json({
      success: false,
      message: `Could not find any ${category} card designs`
    })
  }

  const formatedRows = []
  rows.forEach(row => {
    const { expiration } = row;
    const formatedDate = formatDate(expiration);
    row['expiration'] = formatedDate
    formatedRows.push(row)
  })

  return res.status(200).json({
    success: true,
    data: formatedRows
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

const deleteCardDesignById = asyncHandler(async(req, res) => {
  const { id } = req.params;

  const { rows } = await dbAsyncQuery(queries.getCardDesignById, [id]);
  if (!rows.length) {
    return res.status(404).json({
      success: false,
      message: "Card design does not exist"
    })
  }

  const { background_image } = rows[0]
  if (background_image.includes('cloudinary')) {
    await cloudinaryDelete(background_image)
  }

  const deletedCard = dbAsyncQuery(queries.deleteCardDesignById, [id]);
  if (!deletedCard || deletedCard instanceof Error) {
    return res.status(400).json({
      success: false,
      message: "A problem occured while trying to delete the card design"
    })
  }

  return res.status(200).json({
    success: true,
    message: "Card design deleted successfully"
  })
})

const likeOrUnlikeCardDesign = asyncHandler(async(req, res) => {
  const { userId } = req.body;
  const { id: cardDesignId } = req.params;
  const { rows } = await dbAsyncQuery(queries.getUsersLike, [userId, cardDesignId]);

  if (rows.length === 0) {
    // no like so create like
    const createdLike = await dbAsyncQuery(createLike, [userId, cardDesignId]);
    if (!createdLike) {
      return res.status(400).json({
        success: false,
        message: "Could not create like"
      })
    } else if (createdLike instanceof Error) {
      return res.status(400).json({
        success: false,
        message: createdLike.message
      })
    }

    return res.status(201).json({
      success: true,
      message: "Like created"
    })
  }

  // if there's already a like then delete it
  const deletedLike = await dbAsyncQuery(deleteLike, [userId, cardDesignId]);
  if (!deletedLike) {
    return res.status(400).json({
      success: false,
      message: "Could not delete like"
    })
  } else if (deletedLike instanceof Error) {
    return res.status(400).json({
      success: false,
      message: deletedLike.message
    })
  }

  return res.status(201).json({
    success: true,
    message: "Like deleted"
  })
})

const checkIfUserLikedCard = asyncHandler(async(req, res) => {
  const { userId } = req.body;
  const { id: cardDesignId } = req.params;
  const { rows } = await dbAsyncQuery(queries.getUsersLike, [userId, cardDesignId]);
  if (rows.length === 0) {
    return res.send({liked: false})
  }

  return res.send({liked: true})
})

const saveOrUnsaveCard = asyncHandler(async(req, res) => {
  const { userId } = req.body;
  const { id: cardDesignId } = req.params;
  const { rows } = await dbAsyncQuery(queries.getUsersSavedCard, [userId, cardDesignId]);

  if (rows.length === 0) {
    // no like so create like
    const savedCard = await dbAsyncQuery(saveCard, [userId, cardDesignId]);
    if (!savedCard) {
      return res.status(400).json({
        success: false,
        message: "Could not save card"
      })
    } else if (savedCard instanceof Error) {
      return res.status(400).json({
        success: false,
        message: savedCard.message
      })
    }

    return res.status(201).json({
      success: true,
      message: "Card saved"
    })
  }

  // if there's already a like then delete it
  const unsavedCard = await dbAsyncQuery(unsaveCard, [userId, cardDesignId]);
  if (!unsavedCard) {
    return res.status(400).json({
      success: false,
      message: "Could not unsave card"
    })
  } else if (unsavedCard instanceof Error) {
    return res.status(400).json({
      success: false,
      message: unsavedCard.message
    })
  }

  return res.status(201).json({
    success: true,
    message: "Card unsaved"
  })
})

const checkIfUserSavedCard = asyncHandler(async(req, res) => {
  const { userId } = req.body;
  const { id: cardDesignId } = req.params;
  const { rows } = await dbAsyncQuery(queries.getUsersSavedCard, [userId, cardDesignId]);
  if (rows.length === 0) {
    return res.send({saved: false})
  }

  return res.send({saved: true})
})

const createCardForUsersCollection = asyncHandler(async(req, res) => {
  if (req.file) {
    req.body.background_image = req.file.path
    delete req.body.defaultImage
  }
  const {error, value} = validateUserCollectionCardDetails(req.body);

  if (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const existingCardDesign = await dbAsyncQuery(queries.getCardUserCollectionDesignByNumber, [
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
  ]);

  if (existingCardDesign.rows.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Card with this number already exists"
    })
  }

  const image = req.body.defaultImage ? req.body.defaultImage : req.body.background_image
  const createdDesign = await dbAsyncQuery(queries.createUserCollectionDesign, [
    value.user_id,
    value.name,
    value.card_number_one,
    value.card_number_two,
    value.card_number_three,
    value.card_number_four,
    value.expiration,
    value.color,
    image,
    value.cvv
  ]);

  if (!createdDesign || createdDesign instanceof Error) {
    console.log("here4")
    return res.status(400).json({
      success: false,
      message: "Failed to add to collection"
    })
  }
  
  return res.status(201).json({
    success: true,
    message: "Card design added to your collection",
    createdDesign: createdDesign.rows
  })
})

module.exports = {
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
}