var page = require('page');

var empty = require('../helpers/empty');
var title = require('../helpers/title');
var spinner = require('../helpers/spinner');

var header = require('../header');
var main = document.getElementById('main-container');

async function loadUser(ctx, next) {
  spinner.show();
  var username = ctx.params.username;
  try {
    var user = await fetch(`/api/users/${username}`).then(response => response.json());
    ctx.user = user;
    spinner.hide();
    next();
  } catch (err) {
    spinner.hide();
    console.error(err);
  }
}

page('/users/:username', header, loadUser, function (ctx, next) {
  var template = require('./template');
  title(`Profile: ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
});

