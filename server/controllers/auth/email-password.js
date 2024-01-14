require('dotenv').config();
const { db, dbAsyncQuery } =  require("../../config/db");
const queries = require("../../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const {
  validateUser,
  validateSignIn,
  validateProfileUpdate
} = require("../../utils/validator");
const {signAccessToken, signRefreshToken} = require("../../utils/token");
const { cloudinaryDelete } = require("../../utils/cloudinary");

const defaultUserProfilePicURL = "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg";

const getAllUsers = asyncHandler((req, res) => {
  db.query(queries.getAllUsers, (err, result) => {
    return res.status(200).json({
      success: true,
      data: result.rows
    });
  })
});

const registerUser = asyncHandler(async(req, res) => {
  const { fullName, password, email } = req.body;
  const {error, value} = await validateUser({fullName, email, password});

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const existingUser = await dbAsyncQuery(queries.getUserByEmail, [value.email]);

  if (existingUser.rows.length > 0) {
    return res.status(400).json({
      success: false,
      message: "User with this email already exists"
    })
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(value.password, saltRounds);

  const result = await dbAsyncQuery(
    queries.registerUser,
    [
      value.fullName,
      value.email,
      hashedPassword,
      defaultUserProfilePicURL,
      new Date().toISOString()
    ]
  )

  return res.status(201).json({
    success: true,
    message: "Registration successful",
    data: result.rows
  })
});

const loginUser = asyncHandler(async(req, res) => {
  const { password, email } = req.body;
  const {error, value} = await validateSignIn({email, password});

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const emailUser = await dbAsyncQuery(queries.getUserByEmail, [value.email]);

  if (emailUser.rows.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Email does not exist"
    })
  }

  const user = emailUser.rows[0]
  const hashedPassword = user.pass_word
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword)

  if (!isPasswordMatch)
    return res.sendStatus(400);

  delete user.pass_word
  delete user.refresh_token
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  // have to store refresh token in db
  await dbAsyncQuery(queries.setRefreshToken, [user.id, refreshToken]);
  // send refresh token to frontend in cookie, accessToken in response
  res.cookie(
    'jwt',
    refreshToken,
    {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env['NODE_ENV'] === "development" ? false : true
    }
  )
  user.accessToken = accessToken
  user.password = password

  return res.status(200).json({
    success: true,
    user
  })
})

const editUser =  asyncHandler(async(req, res) => {
  const { fullName, email } = req.body;
  const currentUserId = req.params.id;
  const {error, value} = await validateProfileUpdate({fullName, email});

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
      key: error.key,
      value: error.value,
    })
  }

  const user = await dbAsyncQuery(queries.getUserById, [currentUserId]);

  if (user.rows.length === 0) {
    return res.status(404).json({
      success: false,
      message: "User does not exist"
    })
  }

  const { rows } = await dbAsyncQuery(queries.getUserByEmail, [value.email]);
  const existingUser = rows[0];

  if (!existingUser) {
    return res.status(400).json({
      success: false,
      message: "User does not exist"
    })
  }

  if (existingUser.id !== currentUserId) {
    return res.status(400).json({
      success: false,
      message: "Email address already taken"
    })
  }

  // if new pic uploaded then delete old one
  if (req.file) {
    const oldPicURL = existingUser.photo_url;
    if (oldPicURL !== defaultUserProfilePicURL) cloudinaryDelete(oldPicURL)
  }

  const newPicURL = req.file ? req.file.path : existingUser.photo_url;
  const updated = await dbAsyncQuery(queries.editUser, [
    value.fullName, 
    value.email,
    newPicURL,
    currentUserId
  ]);

  return res.status(200).json({
    success: true,
    user: updated.rows[0]
  })
})

module.exports = {
  loginUser,
  registerUser,
  editUser
};