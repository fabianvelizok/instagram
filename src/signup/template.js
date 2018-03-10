var yo = require('yo-yo');
var landing = require('../landing/template');

var template = yo`
  <div>
    <div class="col s12 m7">
      <div class="row">
        <div class="sign-up-box">
          <h1 class="platzigram">Platzigram</h1>
          <form class="signup-form">
            <h2>Register to see friends studying on Platzi</h2>
            <div class="section">
              <a href="" class="btn btn-fb hide-on-small-only">Sign in with Facebook</a>
              <a href="" class="btn btn-fb hide-on-med-and-up">Sign in <i class="fab fa-facebook"></i></a>
              </a>
            </div>
            <div class="divider"></div>
            <div class="section">
              <div class="row">
                <div class="input-field">
                  <input type="text" name="name" id="name">
                  <label for="name">Name</label>
                </div>
                <div class="input-field">
                  <input type="text" name="email" id="email">
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <input type="password" name="password" id="password">
                  <label for="password">Password</label>
                </div>
                <div class="input-field">
                  <button class="waves-effect waves-light btn" type="submit">Register</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div><!--.row-->

      <div class="row">
        <div class="sign-in-box">
          Do you have an account?
          <a href="/signin">Sign in</a>
        </div>
      </div><!--.row-->
    </div>
  </div>`;

module.exports = landing(template);