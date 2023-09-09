require("dotenv").config();
const Pool = require("pg-pool");
const util = require('util');
const pg = require('pg');

const dbConnect = () => {
  // if development environment then connect to local db
  if (process.env['NODE_ENV'] === 'development') {
    const localSQL = new Pool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'cardvo',
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 4000,
    })

    return localSQL;
  } else {
    // its production so connect to online db
    const conString = process.env['DB_HOST'];
    const elephantSQL = new pg.Client(conString);
    elephantSQL.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      elephantSQL.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
      });
    });

    return elephantSQL;
  }
}

const db = dbConnect()

// Convert the pool.query function to a promise-based version
const dbAsyncQuery = util.promisify(db.query).bind(db);


module.exports = {
  db, 
  dbAsyncQuery
};