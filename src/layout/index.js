var yo = require('yo-yo');
var translate = require('../translate');

var landing = function (content) {
  return yo`
    <div>
      <div class="content">${content}</div>
    </div>`;
};

module.exports = landing;
