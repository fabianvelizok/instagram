var page = require('page');
var main = document.getElementById('main-container');

page("/", function(context, next) {
  var html = 'Home | <a href="/Signup">Signup</a>';
  main.innerHTML = html;
});

page("/signup", function(context, next) {
  var html = 'Signup | <a href="/">Home</a>';
  main.innerHTML = html;
});

page();
