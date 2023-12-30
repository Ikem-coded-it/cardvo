require("dotenv").config();
const {dbAsyncQuery } =  require("../../config/db");
const queries = require("../../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { signAccessToken } = require("../../utils/token");

const refreshUserToken = async(req, res) => {
  const cookies = req.cookies

  if (!cookies?.jwt) return res.sendStatus(401)
  const refreshToken = cookies.jwt;

  const refreshTokenUser = await dbAsyncQuery(queries.getUserByRefreshToken, [refreshToken]);

  if (refreshTokenUser.rows.length === 0) {
    return res.status(403).json({
      message: "refresh token unavailable"
    })
  }

  const user = refreshTokenUser.rows[0]
  delete user.refresh_token
  delete user.pass_word
  
  jwt.verify(refreshToken, process.env['JWT_REFRESH_SECRET'], (err, decoded) => {
    if (err || decoded.email !== user.email) {
      return res.status(403).json({
        message: "invalid refresh token"
      })
    }
    const newAccessToken = signAccessToken(user);
    user.accessToken = newAccessToken;
    res.json({user: user})
  });
};

module.exports = { refreshUserToken }