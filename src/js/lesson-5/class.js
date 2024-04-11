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
