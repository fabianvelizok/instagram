var yo = require('yo-yo');
var axios = require('axios');

var layout = require('../layout');
var pictureCard = require('../picture-card');
var translate = require('../translate');
var Webcam = require('webcamjs');

var modal = require('../helpers/modal');

function ready() {
  Webcam.attach('#camera-input');
}

function complete() {
  Webcam.reset();
}

setTimeout(() => {
  modal('.modal', {
    ready,
    complete
  });
}, 1000);

var template = function (pictures) {
  var home = yo`
    <div>
      <div class="container timeline">
        <div id="modalpicture" class="modal">
          <div class="modal-content">
            <div class="camera-picture" id="camera-input"></div>
          </div>
          <div class="modal-footer">
            <div class="waves-effect waves-light btn" id="shoot">
                <i class="fa fa-camera"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
            <form enctype="multipart/form-data"
                  id="form-upload"
                  class="form-upload"
                  onsubmit="${onSubmit}">
              <a class="waves-effect waves-light btn modal-trigger" href="#modalpicture">
                <i class="fa fa-camera"></i>
              </a>
              <div id="file-name" class="file-upload btn btn-flat cyan">
                <i class="fas fa-cloud-upload-alt"></i>
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
                      onclick="${reset}"
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
      </div>
    </div>`;
  // We have to build the basic layout.
  return layout(home);
};


var form = document.getElementById('form-upload');

function onChange() {
  toggleBtns();
}

function reset () {
  toggleBtns();
  document.getElementById('form-upload').reset();
}

function onSubmit(event) {
  event.preventDefault();
  var formData = new FormData(this);

  axios.post('/api/pictures', formData)
  .then(function (message) {
    console.log(message.data);
  })
  .catch(function (err) {
    console.error(err);
  })
  .finally(function () {
    reset();
  });
}

function toggleBtns() {
  document.getElementById('file-name').classList.toggle('hide');
  document.getElementById('btn-upload').classList.toggle('hide');
  document.getElementById('btn-cancel').classList.toggle('hide');
}


module.exports = template;
