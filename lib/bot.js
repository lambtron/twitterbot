
/**
 * Module dependencies.
 */

var Tweetstream = require('./tweetstream');
var Twitter = require('./twitter');
var co = require('co');

/**
 * Expose `Bot`.
 */

module.exports = Bot;

/**
 * Initialize a new `Bot`.
 *
 * @param {Array} filters
 */

function Bot(filters) {
  if (!(this instanceof Bot)) return new Bot(filters);
  for (var i = 0; i < filters.length; i++) {
    Tweetstream.track(filters[i]);
  }
}

/**
 * Start hunting.
 */

Bot.prototype.start = function() {
  Tweetstream.on('tweet', co.wrap(function *(tweet) {
    yield favorite(tweet.id_str);
    yield follow(tweet.user.id_str);
  }));
  Tweetstream.on('error', function(err) {
    console.log(err);
  });
};

/**
 * Private helper function to favorite.
 */

function *favorite(id) {
  return yield Twitter.post('favorites/create', { id: id });
}

/**
 * Private helper function to follow.
 */

function *follow(userId) {
  return yield Twitter.post('friendships/create', { user_id: userId });
}
