if (!window.Intl) {
  // polyfill for `Intl`
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en.js');
  require('intl/locale-data/jsonp/es.js');
}

window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en');

var messages = {};

messages.es = es;
messages.en = en;

// Language
var lang = localStorage.getItem('lang') || 'en';

var message = function (text, opts) {
  if (!opts) opts = {};
  var mf = new IntlMessageFormat(messages[lang][text], lang);
  return mf.format(opts);
};

var date = function (date) {
  var rf = new IntlRelativeFormat(lang);
  return rf.format(date);
};

module.exports = {
  message: message,
  date: date,
}

