var yo = require('yo-yo');
var page = require('page');

var empty = require('../helpers/empty');
var main = document.getElementById('main-container');

page('/signin', function (context, next) {   
  var template = require('./template'); 
  empty(main).appendChild(template);
});
