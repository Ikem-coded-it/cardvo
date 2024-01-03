require("dotenv").config();
const {dbAsyncQuery } =  require("../../config/db");
const queries = require("../../queries/auth.queries");
const jwt = require("jsonwebtoken");
const { signAccessToken } = require("../../utils/token");

const refreshUserToken = async(req, res) => {
  console.log("here1")
  const cookies = req.cookies
  console.log("here2", cookies)
  if (!cookies?.jwt) return res.sendStatus(401)
  console.log("here3")
  const refreshToken = cookies.jwt;
  console.log("here4", refreshToken)
  const refreshTokenUser = await dbAsyncQuery(queries.getUserByRefreshToken, [refreshToken]);
  console.log("here5", refreshTokenUser)
  if (refreshTokenUser.rows.length === 0) {
    return res.status(403).json({
      message: "refresh token unavailable"
    })
  }
  console.log("here6")
  const user = refreshTokenUser.rows[0]
  delete user.refresh_token
  delete user.pass_word
  console.log("here7")
  jwt.verify(refreshToken, process.env['JWT_REFRESH_SECRET'], (err, decoded) => {
    console.log("here8")
    if (err || decoded.email !== user.email) {
      console.log("here9", decoded, user)
      return res.status(403).json({
        message: "invalid refresh token"
      })
    }
    console.log("here10")
    const newAccessToken = signAccessToken(user);
    console.log("here11", newAccessToken)
    user.accessToken = newAccessToken;
    console.log("here12", user)
    res.json({user: user})
  });
};

module.exports = { refreshUserToken }