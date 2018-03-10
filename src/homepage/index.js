var yo = require('yo-yo');
var page = require('page');

var empty = require('../helpers/empty');
var main = document.getElementById('main-container');

page('/', function (ctx, next) {
  var pictures = [
    {
      image: 'http://next.materializecss.com/images/office.jpg',
      title: 'Pic 1'
    },
    {
      image: 'http://next.materializecss.com/images/sample-1.jpg',
      title: 'Pic 2'
    }
  ];

  var template = require('./template');
  empty(main).appendChild(template(pictures));
});
