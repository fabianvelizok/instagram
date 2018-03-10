var yo = require('yo-yo');

var template = yo`
   <div>
    <div>
    <h1>Home | </h1>
    <a href="/signup">Sign Up</a>     
    <a href="/signin">Sign In</a>     
  </div>`;

module.exports = template;