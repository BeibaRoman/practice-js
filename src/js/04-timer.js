import refs from './refs';

class Timer {
  #timer;

  static NEW_YEAR_PROP = new Date('01.01.2024 00:00');

  constructor(element, reloadTime) {
    this.element = element;
    this.reloadTime = reloadTime;
  }

  create() {
    this.#timer = setInterval(this.attachTimer.bind(this), this.reloadTime);
  }

  attachTimer() {
    const timeLeftValue = this.#calculateDate();
    this.element.textContent = timeLeftValue;
  }

  start() {
    this.stop();
    this.create();
  }

  stop() {
    clearInterval(this.#timer);
  }

  #calculateDate() {
    const now = new Date();
    const timeDifference = Timer.NEW_YEAR_PROP - now;

    const daysLeft = Math.floor(timeDifference / 86400000);
    const hoursLeft = Math.floor((timeDifference % 86400000) / 3600000);
    const minutesLeft = Math.floor((timeDifference % 3600000) / 60000);
    const secondsLeft = Math.floor((timeDifference % 60000) / 1000);
    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }
}

const timer = new Timer(classTitle, 1000);
timer.start();

refs.stopTimerEl.addEventListener('click', () => timer.stop());
refs.startTimerEl.addEventListener('click', () => timer.start());
