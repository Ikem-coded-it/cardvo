require("dotenv").config();
const Pool = require("pg-pool");
const util = require('util');

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'cardvo',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 4000,
})

// Convert the pool.query function to a promise-based version
const poolAsyncQuery = util.promisify(pool.query).bind(pool);

module.exports = {
  pool, 
  poolAsyncQuery
};