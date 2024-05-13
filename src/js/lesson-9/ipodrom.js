import horses from '../../data/horses';

const refs = {
  racebtn: document.querySelector('.js-race-btn'),
  winnerFild: document.querySelector('.js-winner'),
  progressFild: document.querySelector('.js-progress'),
  tabelBody: document.querySelector('.js-results-table > tbody'),
};

let raceCounter = 0;

refs.racebtn.addEventListener('click', hendleStartClick);
function hendleStartClick() {
  const promises = horses.map(run);

  updateWinnerFild('');
  updateProgressFild('✅👉🏻 start race, the bid is not accepted');
  determinWinner(promises);
  waiteForAllho(promises);
}

function run(horse) {
  return new Promise((resolve, rekect) => {
    const time = getRandomTime(3000, 7000);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function determinWinner(horsesPromis) {
  Promise.race(horsesPromis).then(({ horse, time }) => {
    updateWinnerFild(`🎊winn ${horse} for ${time} ms`);
    raceCounter += 1;
    updateResultTable({ horse, time, raceCounter });
  });
}

function waiteForAllho(horsesPromis) {
  Promise.all(horsesPromis).then(() => {
    updateProgressFild('run is complited');
  });
}

function updateProgressFild(message) {
  refs.progressFild.textContent = message;
}

function updateWinnerFild(message) {
  refs.winnerFild.textContent = message;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr> <td>${raceCounter}</td></tr><tr> <td>${horse}</td></tr><tr> <td>${time}</td></tr>`;
  refs.tabelBody.insertAdjacentHTML('beforeend', tr);
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// ====================================================
// const promises = horses.map(horse => run(horse));
// or
// const promises = horses.map(run);
// ==================================================

// Promise.race([]) - чекає віконнання самого бистрого промісу. на своє місце повертає ще один проміс
// Promis.all([]) - чекає виконнання всіх промісів

//  console.log(
//    '%c ✅👉🏻 start race, the bid is not accepted',
//    'color: red; font-size: 16px'
//  );

//  console.log(
//       `%c 🎊winn ${horse} for ${time} ms`,
//       'color:teal; font-size: 16px'
//     )

// console.log(`%c run is complited`, 'color:green; font-size: 16px');
