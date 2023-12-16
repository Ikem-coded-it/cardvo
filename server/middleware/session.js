require('dotenv').config();
const session = require("express-session");
const sessionStore = require("../config/redis");

module.exports = session({
  name: process.env.SESSION_NAME,
  store: sessionStore,
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "development" ? false : true, // if true only transmit cookie over https
    httpOnly: true, // if true prevent client side JS from reading the cookie 
    maxAge: 1000 * 60 * 10 // session max age in miliseconds
  }
})