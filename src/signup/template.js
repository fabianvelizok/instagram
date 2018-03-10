var yo = require('yo-yo');

var template = yo`
  <div>
    <div>
    <h1>Signup | </h1>
    <a href="/">Home</a>     
  </div>
    <section id="container" class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img src="iphone.png" alt="Iphone" class="main-image">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="sign-up-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">
                    <h2>Register to see friends studying on Platzi</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Sign in with Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up">Sign in</a>
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
                  <a href="/sign-in">Sign in</a>
                </div>
              </div><!--.row-->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>`;

module.exports = template;