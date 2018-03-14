var yo = require('yo-yo');
var layout = require('../layout');
var pictureCard = require('../picture-card');
var translate = require('../translate');

var template = function (pictures) {
  var home = yo`
    <div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
          <form enctype="multipart/form-data"
                id="form-upload"
                class="form-upload">
            <div id="file-name" class="file-upload btn btn-flat cyan">
              <i class="fas fa-camera"></i>
              <span>${translate.message('upload-picture')}</span>
              <input name="picture"
                     id="file"
                     type="file"
                     class="upload"
                     onchange="${onChange}"
              >
            </div>
            <button id="btn-upload"
                    type="submit"
                    class="btn btn-flat cyan hide">
              ${translate.message('upload')}
            </button>
            <button id="btn-cancel"
                    type="button"
                    class="btn btn-flat red hide"
                    onclick="${cancel}"
            >
              ${translate.message('cancel')}
            </button>
          </form>
        </div>
      </div>
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

function onChange() {
  toggleBtns();
}

function cancel(event) {
  toggleBtns();
  document.getElementById('form-upload').reset();
}

function toggleBtns() {
  document.getElementById('file-name').classList.toggle('hide');
  document.getElementById('btn-upload').classList.toggle('hide');
  document.getElementById('btn-cancel').classList.toggle('hide');
}


module.exports = template;
