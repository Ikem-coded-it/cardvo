require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: process.env.ALLOWED_CORS_ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true
}

module.exports = cors(corsOptions);