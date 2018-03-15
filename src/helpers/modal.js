/**
 * Initialize modal.
 * @param {string} selector - A class or an id
 * @param {Object} options - Modal configuration
 */
var modal = function (selector, options) {
  if (!options) options = {};
  var el = (typeof selector === 'object') ?
  selector : document.querySelector(selector);
  var instance = M.Modal.init(el, options);
};

module.exports = modal;
