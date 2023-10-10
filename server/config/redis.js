require('dotenv').config();
const redis = require('redis');
const session = require("express-session");
const RedisStore = require("connect-redis").default;

//Configure redis client
let redisClient

if (process.env['NODE_ENV'] === "development") {
  // no need for password in development
  redisClient = redis.createClient({
    socket: {
      host: process.env['REDIS_HOST'],
      port: process.env['REDIS_PORT']
    }
  });
} else {
  redisClient = redis.createClient({
    // needs password to connect to cloud redis in production
    password: process.env['REDIS_PASSWORD'],
    socket: {
      host: process.env['REDIS_HOST'],
      port: process.env['REDIS_PORT']
    }
  });
}

redisClient.connect().catch(console.error);

redisClient.on('error', function (err) {
  console.log('Could not establish a connection with redis. ' + err);
});

redisClient.on('connect', function (err) {
  console.log('Connected to redis successfully');
});

const sessionStore = new RedisStore({ client: redisClient });

module.exports = sessionStore;