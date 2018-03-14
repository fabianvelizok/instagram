function show () {
  var spinner = `<div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>`;

  var spinnerWrapper = document.createElement('div');
  spinnerWrapper.className = 'spinner-wrapper';
  spinnerWrapper.innerHTML = spinner;
  document.getElementsByTagName('body')[0].appendChild(spinnerWrapper);
}

function hide () {
  var spinnerWrapper = document.getElementsByClassName('spinner-wrapper')[0];
  if (spinnerWrapper) spinnerWrapper.remove();
}

module.exports = {
  show: show,
  hide: hide
};
