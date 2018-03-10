/**
 * Initialize dropdown.
 * @param {string} selector - A class or an id
 * @param {Object} options - Dropdown configuration
 */
var dropdown = function (selector, options) {
  setTimeout(function() {
    if (!options) options = {};
    var el = document.querySelector(selector);
    var instance = M.Dropdown.init(el, options);
  });
};

module.exports = dropdown;
