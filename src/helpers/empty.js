/**
 * Empty a dom element.
 * @param {string / el} el - It can be an id or an html element.
 */
var empty = function (el) {
  var node = (typeof el === 'string') ? document.getElementById(el) : el;
  node.innerHTML = '';
  
  return node;
};

module.exports = empty;