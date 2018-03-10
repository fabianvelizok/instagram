var yo = require('yo-yo');
var page = require('page');

var empty = require('../helpers/empty');
var title = require('../helpers/title');

var main = document.getElementById('main-container');

page('/signin', function (ctx, next) {
  var template = require('./template'); 
  // We should get the title from ctx, but it is not updated.
  title('Sign In');
  empty(main).appendChild(template);
});
