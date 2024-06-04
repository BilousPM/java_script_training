// ❌ - помилки парсингу (parsing errors)
// ✅ - помилки виконання (runtime errors)

//  try...catch - обробляє тільки runtime errors

// без помилки
// try {
//   console.log('1');
// } catch (error) {
//   console.log('error');
// }
// console.log('after try...catch');

// з помилкою

// try {
//   console.log('befor myVar');
//   myVar;
//   console.log(' after myVar');
// } catch (error) {
//   console.dir(error);
// }
// console.log('after try...catch');

// ---------------------------------------------------
//            безпечний JSON.parse().
// ---------------------------------------------------
const validJSON = '{"name": "Mango", "age":3}';
const invalidJSON = '{beckend return something...}';

// при помилці парсу код падає...
// console.log(JSON.parse(invalidJSON));

// try {
//   console.log(1);
//   console.log(JSON.parse(invalidJSON));
//   console.log(2);
// } catch {
//   console.log('error');
// }
// console.log('after try...catch');

// try...catch працює лише з синхронним  кодом..

// does not work...

console.log('After !!!');
try {
  setTimeout(() => {
    const number = 10;

    number = 5;
    console.log(number);
  }, 1000);
} catch (error) {
  console.log(error);
}

console.log('Beafore!!!');

// works...

console.log('After !!!');

setTimeout(() => {
  try {
    const number = 10;

    number = 5;
    console.log(number);
  } catch (error) {
    console.log(error);
  }
}, 1000);

console.log('Beafore!!!');
