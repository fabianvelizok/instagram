var yo = require('yo-yo');
var translate = require('../translate');
var dropdown = require('../helpers/dropdown');
dropdown('.dropdown-language-trigger');

var setLang = function (language) {
  if (localStorage.getItem('lang') === language) return;
  localStorage.setItem('lang', language);
  location.reload();
};

var el = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <a class="dropdown-language-trigger btn btn-flat"
              href="#"
              data-target="dropdown-language">
              ${translate.message('language')}
          </a>
          <ul class="dropdown-content" id="dropdown-language">
            <li><a onclick="${setLang.bind(null, 'en')}">${translate.message('english')}</a></li>
            <li><a onclick="${setLang.bind(null, 'es')}">${translate.message('spanish')}</a></li>
          </ul>
        </div>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Platzigram</div>
    </div>
  </div>
</footer>`;

document.body.appendChild(el);
