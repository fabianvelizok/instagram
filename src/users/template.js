var yo = require('yo-yo');
var translate = require('../translate');
var landing = require('../landing');

var modal = require('../helpers/modal');
setTimeout(() => {
  document.querySelectorAll('.modal').forEach(function (el) {
    modal(el);
  });
}, 1000);

var template = function(user) {
  var el = yo`<div>
    <div class="user-page">
      <div class="row clearfix">
        <div class="col s3">
          <img class="user-avatar" src="${user.avatar}"/>
        </div>
        <div class="col s4">
          <h1>${user.username}</h1>
          <p>${user.email}</p>
        </div>
      </div>
      <div class="row">
        ${user.pictures.map(function (pic, index) {
          return yo`<div class="col s4">
            <div id="modal-${index}" class="modal">
              <div class="modal-content">
                <img src="${pic.url}"/>
              </div>
            </div>

            <div class="user-pic-wrapper">
              <img src="${pic.url}" class="user-pic"/>

              <a class="overlay modal-trigger" href="#modal-${index}">
                <div class="likes">
                  <i class="icon fas fa-heart"></i>
                  <span class="likes">${translate.message('likes', { likes: pic.likes })}</span>
                </div>
              </a>
            </div>
          </div>`
        })}
      </div>
    </div>
  </div>`;
  return el;
};

module.exports = template;
