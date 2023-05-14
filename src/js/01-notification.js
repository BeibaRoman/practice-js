import '../css/common.css';

let timerId = null;
const NOTIFICATION_DELAY = 3000;

const refs = {
  notificationEl: document.querySelector('.js-alert'),
};

refs.notificationEl.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  console.log('Прибираємо нагадування та видаляємо сеттаймаут');
  onCloseNotification();
  clearTimeout(timerId);
}

function showNotification() {
  refs.notificationEl.classList.add('is-visible');
  timerId = setTimeout(() => {
    console.log('Закриваємо нагадування черз 3 секунди!');
    onCloseNotification();
  }, NOTIFICATION_DELAY);
}

function onCloseNotification() {
  refs.notificationEl.classList.remove('is-visible');
}
