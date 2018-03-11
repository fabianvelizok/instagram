var yo = require('yo-yo');

var defaultImage = 'http://www.childwomenmin.gov.lk/themes/childwomenmin/assets/images/default-image.jpg';
var defaultTitle = 'No title';

var template = function (picture) {
  return yo`
    <div class="card">
      <div class="card-image">
        <img class="activator" src="${picture.url || defaultImage}">
      </div>
      <div class="card-content">
        <a href="/user/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar || defaultImage}" class="avatar">
          <span class="card-title">${picture.user.username}</span>
        </a>
        <small class="right time">${picture.createdAt}</small>
        <div>
          <a class="left" href="#">
            <i class="icon ${picture.liked ? 'fas fa-heart' : 'far fa-heart'}"></i>
            <span class="likes">${picture.likes} likes</span>
          </a>
        </div>
      </div>
    </div>`;
};

module.exports = template;
