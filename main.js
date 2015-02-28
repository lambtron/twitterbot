
/**
 * Module dependencies.
 */

var Bot = require('./lib/bot');

/**
 * Instantiate new `bot`.
 */

var filters = process.env.KEYWORDS || 'nodejs,javascript,koa';
var bot = new Bot(filters.split(','));

/**
 * Start `bot`.
 */

bot.start();
