require('dotenv').config();
const { db, dbAsyncQuery } =  require("../../config/db");
const queries = require("../../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const { validateSignUp, validateSignIn } = require("../../utils/validator");
const {signAccessToken, signRefreshToken} = require("../../utils/token");

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
  const {error, value} = await validateSignUp({fullName, email, password});

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
      "https://cdn2.vectorstock.com/i/1000x1000/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg",
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
  
  if (!isPasswordMatch) {
    return res.status(400).json({
      success: false,
      message: "Incorrect email or password"
    })
  }

  delete user.pass_word
  delete user.refresh_token
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);

  // have to store refresh token in db
  await dbAsyncQuery(queries.setRefreshToken, [user.id, refreshToken]);
  // send refresh token to frontend in cookie, accessToken in response
  const setCookie = res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, secure: process.env['NODE_ENV'] === "development" ? false : true})
  console.log(setCookie)
  user.accessToken = accessToken
  return res.status(200).json({
    success: true,
    user
  })
})

module.exports = {
  loginUser,
  registerUser
};