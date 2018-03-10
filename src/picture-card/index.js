var yo = require('yo-yo');

var defaultImage = 'http://www.childwomenmin.gov.lk/themes/childwomenmin/assets/images/default-image.jpg';
var defaultTitle = 'No title';

var template = function (picture) {
  return yo`
    <div class="card">
      <div class="card-image">
        <img class="activator" src="${picture.image || defaultImage}">
      </div>
      <div class="card-content">
        <span class="card-title">${picture.title || defaultTitle}</span>
      </div>
    </div>`;
};

module.exports = template;
