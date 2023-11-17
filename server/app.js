require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const logger = require('morgan');
const session = require('express-session');
const passport = require("passport");
const sessionStore = require("./config/redis");

const indexRouter = require('./routes/index');
const authRouter = require("./routes/auth.routes");
const cardDesignRouter = require("./routes/cardDesign.routes");
const commentRouter = require("./routes/comment.routes");

const corsOptions = {
  origin: process.env.ALLOWED_CORS_ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true
}

const app = express();
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport
app.use(passport.initialize());
app.use(session({
  name: process.env.SESSION_NAME,
  store: sessionStore,
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: true,
  cookie: {
    secure: false, // if true only transmit cookie over https
    httpOnly: false, // if true prevent client side JS from reading the cookie 
    maxAge: 1000 * 60 * 10 // session max age in miliseconds
  }
}));

app.use(passport.authenticate("session"));

app.use('/api/v1', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/card-design', cardDesignRouter);
app.use('/api/v1/comment', commentRouter);

// to start server ahead of time on entering landing page in live site
app.get('/api/v1/start', (req, res) => {
  res.send("Server started")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send the error in response
  res.status(err.status || 500).json({
    error: err.message
  });
});

module.exports = app;
