
/**
 * Module dependencies.
 */

var Tweetstream = require('node-tweet-stream');

/**
 * Expose TweetStream client.
 */

module.exports = new Tweetstream({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
