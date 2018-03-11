var yo = require('yo-yo');
var translate = require('../translate');
var empty = require('../helpers/empty');
var dropdown = require('../helpers/dropdown');
dropdown('.dropdown-user-trigger');

var el = yo`<nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>
            <div class="col s2 m6 push-s10 push-m10">
              <a href="#"
                 class="btn btn-large btn-flat dropdown-user-trigger"
                 data-target="dropdown-user">
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
              <ul id="dropdown-user" class="dropdown-content">
                <li><a href="#">${translate.message('logout')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

module.exports = function(ctx, next) {
  var container = document.getElementById('header-container')
  empty(container).appendChild(el);
  next();
}

