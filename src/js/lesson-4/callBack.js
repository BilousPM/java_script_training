// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.
// --------------------------------------------
// Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату

// Функція вищого порядку
const fnA = function (message, callback) {
  console.log(message);
  callback(1000);
};
// Колбек-функція
const fnB = function (number) {
  console.log(' Лог після виклику функциї fnB', number);
};
fnA('hello', fnB);

// інлайн функція
fnA('inline', function () {
  console.log(
    'inlinr - це функція яка передається тільки як колбек (анонімна функція)'
  );
});

// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Манго', greet);

function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// ======================================
// Абстрагування повторення​

// Абстракція - приховування деталей реалізації.

// ------------ Приклад ------------- старт.......

const filter = function (array, test) {
  const filterArray = [];
  for (const el of array) {
    console.log(el);
    const pased = test(el);

    if (pased) {
      filterArray.push(el);
    }
  }
  return filterArray;
};
// ------------------------
// function callback1(value) {
//   return value >= 3;
// }

// const callback2 = function (value) {
//   return value <= 7;
// };

// console.log(filter([1, 3, 6, 2, 47], callback1));

// console.log(filter([86, 45, 3, 7, 29, 2, 1], callback2));
// or Inline

console.log(
  filter([1, 3, 6, 2, 47], function (value) {
    return value >= 3;
  })
);

console.log(
  filter([86, 45, 3, 7, 29, 2, 1], function (value) {
    return value <= 7;
  })
);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'oranges', quantity: 100, isFresh: true },
  { name: 'grapes', quantity: 230, isFresh: false },
  { name: 'lemons', quantity: 490, isFresh: true },
];

function getFreshFruit(fruit) {
  const { isFresh } = fruit;
  // return fruit.quantity > 100;
  // return !fruit.isFresh;
  return isFresh;
}

console.log(filter(fruits, getFreshFruit));

// next examples...video  module 4 lessons 7 (32:43)

const TRANSACTION_LIMIT = 1000;

const account = {
  firstName: 'Petro',
  lastName: 'Bilous',
  balasnse: 1200,
  widthdarw(amount, onSuccses, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError('Limit transactions is no mor $1000');
    } else if (amount > this.balasnse) {
      onError('there are not enough funds in the account');
    } else {
      this.balasnse -= amount;
      onSuccses('Take your money');
    }
  },
  deposit(amount, onSuccses, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError('Transaction limit is $1000');
    } else if (amount <= 0) {
      onError('summ must be more $10');
    } else {
      this.balasnse += amount;
      onSuccses('operation is succses');
    }
  },
};

function hendleSuccses(message) {
  console.log(`✅Succses ! ${message}`);
}

function hendleError(message) {
  console.log(`❌Error! ${message}`);
}

account.widthdarw(700, hendleSuccses, hendleError);
account.widthdarw(700, hendleSuccses, hendleError);
account.deposit(600, hendleSuccses, hendleError);
// account.widthdarw(7000, hendleSuccses, hendleError);
// account.widthdarw(7000, hendleSuccses, hendleError);

// --------------- finich ...........

// --- замикання  -------- мод 4 зан 7 ----1.12
// повертає функцію пі час виклику, буде мати доступ до всіх локальних змінн, та параметрів батьківської функції

const fnW = function (params) {
  const interVariable = 'значення внутришньої змінної fnA';
  console.log(interVariable);
  const innerFunction = function () {
    console.log(params);
    return params;
  };
  return innerFunction;
};

const fnY = fnW(55);

// fnY();
console.log(fnY());

// make Shef snd Dish
const makeShef = function (name) {
  const makeDishes = function (dish) {
    console.log(`${name} cooking ${dish}`);
  };
  return makeDishes;
};

const koly = makeShef('Koly');
koly('bbeaf');

const masha = makeShef('Masha');
masha('potatos');

// -------------------------

// ========== Arrow functions ========

const arrow = () => {};
const arrow1 = a => {};
const arrow2 = (a, b) => {};
const arrow3 = () => {
  if (a) {
    d;
  }
  return;
};
const arrow4 = (a, d) => (a = d);
const arrow5 = (...arg) => {};
const arrow6 = () => ({ a: d });

function fnX(a, b, callBack) {
  callBack(a + b);
}
// передача аргументом
fnX(4, 4, w => console.log(w * 2));
