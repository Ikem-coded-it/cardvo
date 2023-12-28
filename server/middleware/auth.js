require('dotenv').config();
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized"
    })
  }

  try {
    const verified = jwt.verify(
      token,
      process.env['JWT_ACCESS_SECRET']
    )

    req.user = verified;
    next()
  } catch (error) {
    res.sendStatus(403);
    next(error);
  }
}

module.exports = isAuth;