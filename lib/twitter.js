
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var Twitter = require('simple-twitter');

/**
 * Expose thunkified Twitter client.
 */

module.exports = thunkify(new Twitter(
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  process.env.TWITTER_ACCESS_TOKEN_KEY,
  process.env.TWITTER_ACCESS_TOKEN_SECRET
));
