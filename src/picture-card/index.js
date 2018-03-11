var yo = require('yo-yo');
var translate = require('../translate');

var defaultImage = 'http://www.childwomenmin.gov.lk/themes/childwomenmin/assets/images/default-image.jpg';

var template = function (picture) {
  var el = null;

  var render = function(pic) {
    return yo`
      <div class="card">
        <div class="card-image">
          <img class="activator" src="${pic.url || defaultImage}">
        </div>
        <div class="card-content">
          <a href="/user/${pic.user.username}" class="card-title">
            <img src="${pic.user.avatar || defaultImage}" class="avatar">
            <span class="card-title username">${pic.user.username}</span>
          </a>
          <small class="right time">${translate.date(pic.createdAt)}</small>
          <div>
            <a class="left" href="#" onclick="${like.bind(null, !pic.liked)}">
              <i class="icon ${pic.liked ? 'fas fa-heart' : 'far fa-heart'}"></i>
              <span class="likes">${translate.message('likes', {likes: pic.likes})}</span>
            </a>
          </div>
        </div>
      </div>`;
  }

  var like = function (liked) {
    picture.liked = liked;
    picture.likes += liked ? 1 : -1;

    var newEl = render(picture);
    el = yo.update(el, newEl);
    return false;
  };

  return el = render(picture);
};

module.exports = template;
