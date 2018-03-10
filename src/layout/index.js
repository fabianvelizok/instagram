var yo = require('yo-yo');
var dropdown = require('../helpers/dropdown');
// Init dropdown
dropdown('.dropdown-user-trigger');

var landing = function (content) {
  return yo`
  <div>
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 offset-m1">
              <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s2 m6 push-s10">
              <a class='dropdown-user-trigger btn' href='#' data-target='dropdown-user'>
                <i class="fas fa-user"></i>
              </a>
              <ul id="dropdown-user" class="dropdown-content">
                <li><a href="#">Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">${content}</div>
  </div>`;
};

module.exports = landing;