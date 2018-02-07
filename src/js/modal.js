'use strict';

(function () {

  const mapLink = document.querySelector('.map__link');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__close');
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  mapLink.addEventListener('click', function modalActivate(evt) {

    evt.preventDefault();
    modal.classList.add('modal__visible');
  });

  modalCloseButton.addEventListener('click', function onModalClick(evt) {

    evt.preventDefault();
    modal.classList.remove('modal__visible');

  });

  document.addEventListener('keydown', function onEscPress(evt) {

    if (evt.keyCode === ESC_KEYCODE) {
      modal.classList.remove('modal__visible');
    }

  });

  modalCloseButton.addEventListener('keydown', function onEnterPress(evt) {

    if (evt.keyCode === ENTER_KEYCODE) {
      modal.classList.remove('modal__visible');
    }

  });

}());
