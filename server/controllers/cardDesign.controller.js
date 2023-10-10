const { db, dbAsyncQuery } =  require("../config/db");
const queries = require("../queries/cardDesign.queries");
const asyncHandler = require("express-async-handler");

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

module.exports = {
  getAllCardDesigns
}