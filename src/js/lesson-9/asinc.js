import { Modal } from 'bootstrap.native';
import { func } from 'joi';

//Метод setTimeout() дозволяє запланувати запуск функції через певний час.
//const timerId = setTimeout(callback, delay, arg1, arg2, ...);
// callback - функція, виконання якої необхідно запланувати.
// delay - час в мілісекундах, через який callback-функція буде викликана один раз.
// Додаткові аргументи(arg1, arg2 тощо) будуть передані callback - функції під час виклику.

const logMessageInSetTimeOut = function (x) {
  // console.log(x);
  // console.log('log in setTimeOut callBack ');
};

// console.log('beefore');

const timerId = setTimeout(logMessageInSetTimeOut, 200, 'arguments');

console.log('after');
for (let i = 0; i < 10; i += 1) {
  // console.log(i);
}
// console.log(timerId);

const shoudCanselTimer = Math.random() > 0.4;
console.log(shoudCanselTimer);
// метод clearTimeout(id), який приймає ідентифікатор таймера і очищає (видаляє) його.
if (!shoudCanselTimer) {
  // clearTimeout(timerId);
}

// Метод setInterval() - це простий спосіб повторення коду знову і знову зі встановленим
// const timerId = setInterval(callback, delay, arg1, arg2, ...);
const intervalId = setInterval(setIntervalTest, 2000, 2000);
function setIntervalTest(time) {
  let randomNumber = Math.random();
  // console.log(
  //   `we can see realization function щof each ${time / 1000} seonds`,
  //   randomNumber
  // );
  if (randomNumber > 0.9) {
    // Зупинити виконання можна викликом методу clearInterval(id)
    // console.log('> 0.9, STOP');
    clearInterval(intervalId);
  }
}

// -------------------------------------------------------
// надоїдалка...
const PROMPT_DELAY = 2000;
const MAX_PROPMPTA_ATTEMPTS = 4;
let promptCounter = 0;
let hasSubscribed = false;

const myModal = new Modal('#subscription-modal');
const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('#subscribeBtn'),
};

// openModal();

refs.modal.addEventListener('hidden.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', handleSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROPMPTA_ATTEMPTS || hasSubscribed) {
    return;
  }
  const timeoutId = setTimeout(() => {
    myModal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function handleSubscribeBtnClick() {
  hasSubscribed = true;
  myModal.hide();
}
// -------------------------------------------------

const date = new Date();
console.log(date);
console.dir(date);
console.log(date.getTime());

const date1 = Date.now();
console.log(date1);
// --------------------------------------------------
// timer
const timerRefs = {
  clockFase: document.querySelector('.js-clockface'),
  startBtn: document.querySelector('button[data-action-start'),
  stopBtn: document.querySelector('button[data-action-stop'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActiv = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActiv) {
      return;
    }
    const startTime = Date.now();
    this.isActiv = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActiv = false;
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({ onTick: updateClockFaase });

timerRefs.startBtn.addEventListener('click', timer.start.bind(timer));
timerRefs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function - construktor
// const timer = {
//   intervalId: null,
//   isActiv: false,

//   start() {
//     if (this.isActiv) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActiv = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);
//       updateClockFaase(time);
//       // console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActiv = false;
//   },
// };

function updateClockFaase({ hours, mins, secs }) {
  timerRefs.clockFase.textContent = `${hours}:${mins}:${secs}`;
}

// функція, що приймає число, привлдить до рядка, і добавляє на почанок '0', якщо чісло менше 2 - х знаків;
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }
