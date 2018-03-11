var yo = require('yo-yo');
var page = require('page');
var superagent = require('superagent');
var axios = require('axios');

var empty = require('../helpers/empty');
var timeAgo = require('../helpers/timeAgo');

var header = require('../header');

var main = document.getElementById('main-container');

var loadPicturesSuperagent = function (ctx, next) {
  superagent
    .get('/api/pictures')
    .end(function (err, res) {
      if (err) return console.error(err);
      ctx.pictures = res.body;
      next();
    });
};

var loadPicturesAxios = function (ctx, next) {
  axios.get('/api/pictures')
    .then(function (pictures) {
      ctx.pictures = pictures.data;
    })
    .catch(function (err) {
      console.error(err);
    })
    .finally(function () {
      next();
    });
};

var loadPicturesFetch = function (ctx, next) {
  fetch('/api/pictures')
    .then(function (response) {
      return response.json();
    })
    .then(function (pictures) {
      ctx.pictures = pictures.data;
    })
    .catch(function (err) {
      console.error(err);
    })
    .finally(function () {
      next();
    });
};

async function asyncLoad (ctx, next) {
  try {
    var pictures = await fetch('/api/pictures').then(response=> response.json());
    ctx.pictures = pictures;
    next();
  } catch (err) {
    console.error(err);
  }
}

page('/', header, asyncLoad, function (ctx, next) {
  var template = require('./template');
  empty(main).appendChild(template(ctx.pictures));
});
