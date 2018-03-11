if (!window.Intl) {
  // polyfill for `Intl`
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en.js');
  require('intl/locale-data/jsonp/es.js');
}

window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('IntlRelativeFormat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en');

var messages = {};

messages.es = es;
messages.en = en;

var locale = 'en';

var message = function (message, opts) {
  var mf = new IntlMessageFormat(message, locale);
  return mf.format(opts);
};

var date = function (date) {
  var rf = new IntlRelativeFormat(locale);
  return rf.format(date);
};

module.exports = {
  message: message,
  date: date,
}

