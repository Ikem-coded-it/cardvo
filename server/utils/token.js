require("dotenv").config();
const jwt = require("jsonwebtoken");

const signAccessToken = (user) => {
  const accessToken = jwt.sign(
    user,
    process.env['JWT_ACCESS_SECRET'],
    { expiresIn: process.env['NODE_ENV'] = 'development' ? '10s' : '30m' },
    { algorithm: 'RS256' }
  );

  return accessToken;
}

const signRefreshToken = (user) => {
  const refreshToken = jwt.sign(
    user,
    process.env['JWT_REFRESH_SECRET'],
    { expiresIn: process.env['NODE_ENV'] = 'development' ? '20s' : '1d' },
    { algorithm: 'RS256' }
  );

  return refreshToken;
}

module.exports = {
  signAccessToken,
  signRefreshToken
}