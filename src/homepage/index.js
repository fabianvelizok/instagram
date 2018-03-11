var yo = require('yo-yo');
var page = require('page');
var request = require('superagent');

var empty = require('../helpers/empty');
var timeAgo = require('../helpers/timeAgo');

var header = require('../header');

var main = document.getElementById('main-container');

var loadPictures = function (ctx, next) {
  request
    .get('/api/pictures')
    .end(function (err, res) {
      if (err) return console.error(err);
      ctx.pictures = res.body;
      next();
    });
};

page('/', header, loadPictures, function (ctx, next) {
  var template = require('./template');
  empty(main).appendChild(template(ctx.pictures));
});
