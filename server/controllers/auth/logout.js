require("dotenv").config();
const {dbAsyncQuery } =  require("../../config/db");
const queries = require("../../queries/auth.queries");
const asyncHandler = require("express-async-handler");

const logout = asyncHandler(async(req, res) => {
  // on client also delete access token
  const cookies = req.cookies

  if (!cookies?.jwt) return res.sendStatus(204) // if no cookies then cool, was about to erase it anyway
  const refreshToken = cookies.jwt;

  // is refreshToken in db
  const refreshTokenUser = await dbAsyncQuery(queries.getUserByRefreshToken, [refreshToken]);

  if (refreshTokenUser.rows.length === 0) {
    res.clearCookie('jwt', {httpOnly: true, secure: process.env['NODE_ENV'] === "development" ? false : true});
    return res.sendStatus(204);
  };

  // delete refresh token in db
  const user = refreshTokenUser.rows[0]
  await dbAsyncQuery(queries.setRefreshToken, [user.id, null]);

  res.clearCookie('jwt', {httpOnly: true, secure: process.env['NODE_ENV'] === "development" ? false : true});
  
  res.sendStatus(204);
})

module.exports = { logout }