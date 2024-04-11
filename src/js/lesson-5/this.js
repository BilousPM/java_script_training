'use strict';

// this - значення контексту всередині функції (не стрілочної) визначається не на момент її створення, а на момент виклику
// this у глобальній області видимості

function foo() {
  console.log(this);
}
foo(); // window без "use strict" і undefined з "use strict"

// this в методі об'єкта. Якщо функція була викликана як метод об'єкта, то контекст буде посилатися на об'єкт, частиною якого є метод.
const petya = {
  username: 'Petya',
  showThis() {
    console.log('this - it is object', this);
  },
  showName() {
    console.log(this.username);
  },
};

petya.showThis();
petya.showName();

function showAgenThis() {
  console.log('this in showThis: ', this);
  console.log('this in showThis: ', this.username);

  // return this;
}
// showAgenThis();
petya.showUser = showAgenThis;
console.log(petya);
petya.showUser();

const outerShowThis = petya.showThis;
outerShowThis();
// console.log(outerShowThis);

// -------------------------------------------------
// this в callback-функціях​
// при передачі методів обєкта як callback, контекст не зберігаєтьсяю
const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(callback);
  callback(); //- це виклик методу getFullName без об'єкта
}

makeMessage(customer.getFullName);

// this у стрілочних функціях​

// Стрілочні функції не мають свого this. На відміну від звичайних функцій, змінити значення this всередині стрілки після її оголошення - неможливо.
