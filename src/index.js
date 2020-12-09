import './styles.css';
const refs = {
  timerRef: document.querySelector('#timer-1'),
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minutesRef: document.querySelector('[data-value="mins"]'),
  secondsRef: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timerInterval = setInterval(() => {
    const currentTime = Date.now();

    const deltaTime = this.targetDate - currentTime;
    this.renderTime(deltaTime);
    this.stopTimer(deltaTime);
  }, 1000);

  renderTime(deltaTime) {
    const days = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(
      Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    refs.daysRef.textContent = `${days}`;
    refs.hoursRef.textContent = `${hours}`;
    refs.minutesRef.textContent = `${mins}`;
    refs.secondsRef.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  stopTimer(deltaTime) {
    if (deltaTime < 0) {
      clearInterval(this.timerInterval);
      this.renderTime(0);
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2020'),
});

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
