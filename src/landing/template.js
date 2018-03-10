var yo = require('yo-yo');

var landing = function (box) {
  return yo`<div>
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hide-on-small-only">
            <img src="iphone.png" alt="Iphone" class="main-image">
          </div>
          ${box}
        </div>
      </div>
    </div>
  </div>`;
};

module.exports = landing;