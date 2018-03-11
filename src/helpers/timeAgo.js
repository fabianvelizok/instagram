var moment = require('moment');
/**
 * Relative time
 * @param {String} date - format(mm-dd-yyyy)
 */
var timeAgo = function (date) {
  var newDate = date ? new Date(date) : new Date();
  return moment(newDate).fromNow();
};

module.exports = timeAgo;

