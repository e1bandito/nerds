'use strict';

(function () {

  var mapLinkButton = document.querySelector('.map__link');
  var modalWindow = document.querySelector('.modal');
  var modalCloseButton = document.querySelector('.modal__close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  mapLinkButton.addEventListener('click', function (evt) {

    evt.preventDefault();
    modalWindow.classList.add('modal__visible');

  });

  modalCloseButton.addEventListener('click', function (evt) {

    evt.preventDefault();
    modalWindow.classList.remove('modal__visible');

  });

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === ESC_KEYCODE) {
      modalWindow.classList.remove('modal__visible');
    }

  });

  modalCloseButton.addEventListener('keydown', function (evt) {

    if (evt.keyCode === ENTER_KEYCODE) {
      modalWindow.classList.remove('modal__visible');
    }

  });

}());
