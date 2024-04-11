// Інструкція if​....
// Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if.
// Якщо умова приводиться до false, код у фігурних дужках буде пропущений

const age = 4;
if (age === 5) {
  console.log('hello baby!!');
}

// Інструкція if...else​

// Розширює синтаксис if таким чином, що якщо умова приводиться до false, виконається код у фігурних дужках після оператора else.

const temp = 23;
if (temp === 20) {
  console.log('come on outside');
} else {
  console.log('stay at home');
}

// Інструкція else...if​

// Блок else...if дозволяє додати після else ще один оператор if з умовою.

let cost;
const subscription = 'premium';

if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log('Invalid subscription type');
}

console.log(cost); // 500

// Тернарний оператор

// Тернарний оператор повинен використовуватися у простих операціях присвоєння або повернення. Його використання для опису складних розгалужень - погана практика (антипатерн).

// Якщо умова правдива, тобто приводиться до true, обчислюється вираз після ?.
// Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.

const age1 = 20;
const type = age1 >= 18 ? 'adult' : 'child';
console.log(type); // "adult"
