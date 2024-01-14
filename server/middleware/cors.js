require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: process.env.ALLOWED_CORS_ORIGIN,
  optionsSuccessStatus: 200,
  // preflightContinue: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}

module.exports = cors(corsOptions);