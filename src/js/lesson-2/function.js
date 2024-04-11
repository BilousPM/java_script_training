// -------------------- Функції------------------
// --- Функціональний вираз..... (function expression) можна викликати тільки після обявлення.

// const add = function (x, y) {
//   console.log(x, y);

//   const result = x * y;

//   console.log(result);
//   return result;
// };
// виклик функції  (function invikation)
// const result = add(3, 56);
// add(329, 8);
// add(34, 5);
// console.log(result);

// (function declaration) можна викликати будь де

multiply(3, 5, 7);

function multiply(x, y, z) {
  console.log(x * y * z);
}

//  --------- Псевдомасив "arguments" ------

// перетворюємо спевдомасив в масив.
// const fn = function () {
//   const args = Array.from(arguments);
//   console.log(args);
// };

const fn = function (...args) {
  console.log(args);
};

fn(1, 2, 3, 4);
fn(1, 2, 3, 4, 5, 6, 7);
fn(1, 2, 3, 4, 5, 6, 7, 8, 9);

// задачки

const cart = [54, 28, 105, 78, 92, 17, 120];

const calculateTotalPrice = function (item) {
  let total = 0;
  for (element of item) {
    total += element;
  }
  return total;
};

console.log(calculateTotalPrice([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// #2
const string = 'Welcome to the future';

const reversWord = function (string) {
  const reversString = string.split(' ').reverse().join(' ');

  return reversString;
};

console.log(reversWord(string));

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
  } else if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
  } else {
    console.log('Операція зняття коштів проведена успішно');
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// патерн раннє повернення...
function withdraw(amount, balance) {
  // Якщо умова виконується, викликається console.log
  // і вихід із функції. Код після тіла if не виконається.
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
    return;
  }
  if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
    return;
  }
  console.log('Операція зняття коштів проведена');
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена"
