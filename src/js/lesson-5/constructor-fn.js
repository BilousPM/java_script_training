//властивість "prototype" є тільки у функцій. У обєктів є "__proto__"
// === Class ===
// Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменника), що створюється.

const Car = function (config = {}) {
  // this всередині конструктора буде посилатися на новостворений об'єкт
  console.log(this);
  console.log(config);
  //деструктуруєм обєкт параметрів ⬇️
  const { brand, model, price, color } = config;
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  //під час створення нового обєкта в властивості this.__proto__ на обєкт Car.prototype. Тобто Car.prototype - це ПРОТОТИП майбутнього обЄкту (ЕКЗЕМПЛЯРУ)
};
console.log(Car.prototype);

//статична властивість...
Car.dealer = 'GM';

Car.prototype.changePrise = function (newPrice) {
  this.price = newPrice;
};

//створення екземпляру класу ⬇️
const myCar = new Car({
  //це обєкт параметрів
  brand: 'Audi',
  model: 'TT',
  color: 'red',
  price: 33500,
});
// Результат виклику new Car() - це пустий об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом. ⬇️
console.log(myCar);

const myCar2 = new Car({
  brand: 'Ford',
  model: 'F150',
  color: 'black',
  price: 42300,
});

myCar2.changePrise(55000);
console.log(myCar2);

const myCar3 = new Car({
  brand: 'Jeep',
  model: 'Grand Cerokee',
  color: 'Dark Blue',
  price: 55200,
});

const myCar4 = new Car();

console.log(myCar);
console.log(myCar2);
console.log(myCar3);
console.log(myCar4);

//-----------------------------

const UsaSitizen = function ({ name, lastname, age, gender } = {}) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.gender = gender;
};

UsaSitizen.prototype.changeAge = function (newAge) {
  this.age = newAge;
};

const petro = new UsaSitizen({
  name: 'Petro',
  lastname: 'Bilous',
  age: 39,
  gender: 'male',
});

const nadiia = new UsaSitizen({
  name: 'Nadiia',
  lastname: 'Bilous',
  age: 35,
  gender: 'female',
});

console.log(petro);

nadiia.changeAge(35);
console.log(nadiia);

//Статічні властивості і методи ;
UsaSitizen.loginfo = function (obj) {
  console.log(obj);
};

console.dir(UsaSitizen);

UsaSitizen.loginfo(myCar2);

//це все також статичні методи;
// Object.keys();
// Object.values();
// Math.max();

// робимо плагін (готовий інструмент для вирішення певних задач : слайдер .....)
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
  this.updateValueUi();
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('🚀 ~ this._refs.incrementBtn.addEventListener ~ this:', this);

    this.increment();
    this.updateValueUi();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('🚀 ~ this._refs.incrementBtn.addEventListener ~ this:', this);

    this.decrement();
    this.updateValueUi();
  });

  CounterPlugin.prototype.updateValueUi = function () {
    this._refs.value.textContent = this._value;
  };
};

const counter1 = new CounterPlugin({
  rootSelector: '#counter-1',
  step: 5,
  initialValue: 100,
});

const counter2 = new CounterPlugin({
  rootSelector: '#counter-2',
  step: 32,
  initialValue: 400,
});

const counter3 = new CounterPlugin({
  rootSelector: '#counter-3',
  step: 100,
  initialValue: 7000,
});
