require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const asyncHandler = require("express-async-handler");

const redirectURL = 'http://localhost:3000/api/v1/auth/oauth';

const googleSignInRequest = asyncHandler(async(req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Reffer-Policy', 'no-referrer-when-downgrade');

  const oAuth2Client = new OAuth2Client(
    process.env['GOOGLE_CLIENT_ID'],
    process.env['GOOGLE_CLIENT_SECRET'],
    redirectURL
  );

  const authorizeURL = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
    prompt: 'consent'
  });

  res.status(200).json({url: authorizeURL});
})

const fetchUserData = asyncHandler(async(accessToken) => {
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${accessToken}`);
  const data = await response.json();
  console.log('data', data);
})

const getUserData = asyncHandler(async(req, res, next) => {
  const code = req.query.code;
  console.log("code", code)
  const oAuth2Client = new OAuth2Client(
    process.env['GOOGLE_CLIENT_ID'],
    process.env['GOOGLE_CLIENT_SECRET'],
    redirectURL
  );
  const response = await oAuth2Client.getToken(code);
  await oAuth2Client.setCredentials(response.tokens);
  console.log('Tokens acquired');
  const user = oAuth2Client.credentials;
  console.log('credentials', user);
  await fetchUserData(user.access_token);
})

module.exports = {
  googleSignInRequest,
  getUserData
}