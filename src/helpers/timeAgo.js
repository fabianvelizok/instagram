if (!window.Intl) {
  // polyfill for `Intl`
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en.js');
  require('intl/locale-data/jsonp/es.js');
}

window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

/**
 * Relative time
 * @param {String} date - format(mm-dd-yyyy)
 */
var timeAgo = function (date) {
  var newDate = date ? new Date(date) : new Date();
  var rf = new IntlRelativeFormat('en');
  return rf.format(newDate);
};

module.exports = timeAgo;

