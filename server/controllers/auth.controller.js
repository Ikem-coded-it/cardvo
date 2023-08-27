const { pool, poolAsyncQuery } =  require("../config/db");
const queries = require("../queries/auth.queries");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const { validateSignUp, validateSignIn } = require("../utils/validator");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const getAllUsers = asyncHandler((req, res) => {
  pool.query(queries.getAllUsers, (err, result) => {
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

  const existingUser = await poolAsyncQuery(queries.getUserByEmail, [value.email]);

  if (existingUser.rows[0].email) {
    return res.status(400).json({
      success: false,
      message: "User with this email already exists"
    })
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(value.password, saltRounds);

  const result = await poolAsyncQuery(
    queries.registerUser,
    [value.fullName, value.email, hashedPassword, new Date().toISOString()]
  )

  if (!result || result instanceof Error) {
    return res.status(400).json({
      success: false,
      error: result.message
    })
  }

  return res.status(201).json({
    success: true,
    message: "Registration successful",
    data: result.rows
  })
});

const getUserByEmail = asyncHandler(async(email, password, cb) => {
  const user = await poolAsyncQuery(
    queries.getUserByEmail,
    [email]
  );
  console.log(user)
  if (!user.rows) return cb(null, false, { message: 'Incorrect username or password.' })

  const foundUser = user.rows[0]
  bcrypt.compare(password, foundUser.password, function(err, password) {
    if (err) return cb(null, false, { message: 'Incorrect username or password.' })
    return res.status(200).json({success: true, message: "Login successful"})
  })

})


module.exports = {
  getAllUsers,
  registerUser,
  getUserByEmail
};