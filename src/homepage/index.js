var yo = require('yo-yo');
var page = require('page');

var empty = require('../helpers/empty');
var timeAgo = require('../helpers/timeAgo');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
  var pictures = [
    {
      user: {
        username: 'fabianvelizok',
        avatar: 'https://static.platzi.com/media/avatars/fabian.h.veliz_99768843-1603-4154-9164-f5b33ae29916.jpg'
      },
      url: 'http://next.materializecss.com/images/sample-1.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date('11-10-2017')
    },
    {
      user: {
        username: 'elloco',
        avatar: 'https://static.platzi.com/media/avatars/fabian.h.veliz_99768843-1603-4154-9164-f5b33ae29916.jpg'
      },
      url: 'http://next.materializecss.com/images/office.jpg',
      likes: 0,
      liked: true,
      createdAt: new Date()
    }
  ];

  var template = require('./template');
  empty(main).appendChild(template(pictures));
});
