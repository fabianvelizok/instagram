var yo = require('yo-yo');
var layout = require('../layout');
var pictureCard = require('../picture-card');

var template = function (pictures) {
  var home = yo`
    <div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
          ${pictures.map(function(picture){
            return pictureCard(picture);
          })}
        </div>
      </div>
    </div>`;
  // We have to build the basic layout.
  return layout(home);
};

module.exports = template;
