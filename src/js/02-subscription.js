import '../css/modal.css';

const refs = {
  backdrop: document.querySelector('.js-backdrop'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  subscribeModalBtn: document.querySelector('[data-action="subscribe-modal"]'),
};

const PROMP_DELAY = 3000;
const MAX_PROMP_ATTEMPTS = 3;
let promtCounter = 0;
let hasSubscribed = false;

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.subscribeModalBtn.addEventListener('click', onSubscriveModal);
refs.backdrop.addEventListener('click', onBackdropClick);

openModalWithDelay();

function openModalWithDelay() {
  if (promtCounter === MAX_PROMP_ATTEMPTS || hasSubscribed) {
    console.log('Останнє логування!');
    return;
  }

  setTimeout(() => {
    onOpenModal();
    promtCounter += 1;
  }, PROMP_DELAY);
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  console.log('Сетап в роботі!');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  openModalWithDelay();
}

function onSubscriveModal() {
  console.log('Вітаю, Ви підписалися на нашу розсилку!');
  hasSubscribed = true;
  onCloseModal();
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  const ESC_KEY = 'Escape';
  const isEscKey = e.code === ESC_KEY;
  if (isEscKey) {
    console.log('Закриваємо модалку по натиску на ESC');
    onCloseModal();
  }
}
