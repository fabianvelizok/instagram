var yo = require('yo-yo');
var translate = require('../translate');
var landing = require('../landing');

var template = yo`
  <div>
    <div class="col s12 m7">
      <div class="row">
        <div class="sign-up-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form">
            <h2>${translate.message('signup.subheading')}</h2>
            <div class="section">
              <a href="" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
              <a href="" class="btn btn-fb hide-on-med-and-up">${translate.message('signup.facebook')} <i class="fab fa-facebook"></i></a>
            </div>
            <div class="divider"></div>
            <div class="section">
              <div class="row">
                <div class="input-field">
                  <input type="text" name="name" id="name">
                  <label for="name">${translate.message('username')}</label>
                </div>
                <div class="input-field">
                  <input type="text" name="email" id="email">
                  <label for="email">${translate.message('email')}</label>
                </div>
                <div class="input-field">
                  <input type="password" name="password" id="password">
                  <label for="password">${translate.message('password')}</label>
                </div>
                <div class="input-field">
                  <button class="waves-effect waves-light btn" type="submit">${translate.message('signup.cta')}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="sign-in-box">
          ${translate.message('signup.have-account')}
          <a href="/signin">${translate.message('signin')}</a>
        </div>
      </div>
    </div>
  </div>`;

module.exports = landing(template);
