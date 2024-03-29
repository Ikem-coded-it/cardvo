require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const corsMiddleware = require("./middleware/cors");
const cors = require("cors");
const logger = require('morgan');

const indexRouter = require('./routes/index');
const authRouter = require("./routes/auth.routes");
const cardDesignRouter = require("./routes/cardDesign.routes");
const commentRouter = require("./routes/comment.routes");

const app = express();
app.use(corsMiddleware);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.options('*', cors())
app.use('/api/v1', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/card-design', cardDesignRouter);
app.use('/api/v1/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err.message === 'Unauthorized') {
    res.sendStatus(403);
  }

  // send the error in response
  res.status(err.status || 500).json({
    error: err.message
  });
});

module.exports = app;
