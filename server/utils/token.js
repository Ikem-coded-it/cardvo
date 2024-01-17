require("dotenv").config();
const jwt = require("jsonwebtoken");

const environment = process.env.NODE_ENV;

const signAccessToken = (user) => {
  const accessToken = jwt.sign(
    user,
    process.env['JWT_ACCESS_SECRET'],
    { expiresIn: environment === 'development' ? '10m' : '5h' },
    { algorithm: 'RS256' }
  );

  return accessToken;
}

const signRefreshToken = (user) => {
  const refreshToken = jwt.sign(
    user,
    process.env['JWT_REFRESH_SECRET'],
    { expiresIn: environment === 'development' ? '30m' : '1d' },
    { algorithm: 'RS256' }
  );

  return refreshToken;
}

module.exports = {
  signAccessToken,
  signRefreshToken
}