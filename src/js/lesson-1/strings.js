// .lengs - властивість довжини рядка

const message = 'this is a string!';
console.log(message.length);

// конкатинація рядків

const firstName = 'Bob';
const lastName = 'Jeferson';
const room = 576;

console.log(firstName + ' ' + lastName);
console.log('qwe' + 'rty');

// Template strings ``- шаблонні рядки

const welcomMessage = `Hello mr/mrs ${firstName} ${lastName}, your room is ${room}`;
console.log(welcomMessage);

// Нормалізація .toLowerCase(), .toUperCase()
console.log(welcomMessage.toUpperCase());
console.log(welcomMessage.toLowerCase());

// пошук в рядку includes(), повертає Bullean (true or false)

console.log(welcomMessage.includes('mrs'));
const normalizedString = welcomMessage.toLocaleLowerCase().includes('hello');
console.log(normalizedString);

// Метод indexOf()​. Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1,

console.log(message.indexOf('a')); // 8
console.log(message.indexOf('hello')); // -1

// Метод endsWith()​ Дозволяє визначити, чи завершується рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.

const jsFileName = 'script.js';
console.log(jsFileName.endsWith('.js')); // true

const cssFileName = 'styles.css';
console.log(cssFileName.endsWith('.js')); // false

// Методи replace() і replaceAll()​ Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

// const jsFileName = 'script.js';
// const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
// console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = 'styles.css, about.css, portfolio.css';
const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// Метод slice()​ Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок
const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
