'use strict';
// === Метод call()​ ===
// foo.call(obj, arg1, arg2, ...)
// Метод call викличе функцію foo таким чином, що в this буде посилання на об'єкт obj, а також передасть аргументи arg1, arg2 тощо.

function greetGuest(greeting) {
  console.log(this);
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: 'Манго',
};
const poly = {
  username: 'Полі',
};

greetGuest.call(mango, 'Ласкаво просимо'); // Ласкаво просимо, Манго.
greetGuest.call(poly, 'З прибуттям');

//=== Метод apply​ ===

// Метод apply - це аналог методу call за винятком того, що синтаксис передачі аргументів вимагає не перерахування, а масив, навіть якщо аргумент всього один.
// foo.apply(obj, [arg1, arg2, ...])
greetGuest.apply(mango, ['Ласкаво просимо']);
greetGuest.apply(poly, ['З прибуттям']);

//=== Метод bind()​ ===

// Метод bind створює і повертає копію функції foo з прив'язаним контекстом obj і аргументами arg1, arg2 тощо. Утворюється копія функції, яку можна передати куди завгодно і викликати коли завгодно.
// foo.bind(obj, arg1, arg2, ...)

const greetGuestMango = greetGuest.bind(mango, 'Ласкаво просимо');
const greetGuestPoly = greetGuest.bind(poly, 'Ласкаво просимо');

greetGuestMango();
greetGuestPoly();

// .bind() дозволяє передати метод обєкту як callback....

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// updateCounter(10, counter.increment);
// updateCounter(20, counter.decrement);
updateCounter(10, counter.increment.bind(counter));
updateCounter(20, counter.decrement.bind(counter));

console.log(counter);
