// =================== Interaction with the user ===================

//---------- Виведення даних -----------

const message = 'JavaScript is awesome!';
// console.log(message); // JavaScript is awesome!
console.table();
console.dir();

// Метод "alert()" виводіть данні в діалоговому вікні

alert(message);

// --------------- Отримання даних -------------

// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Повертає "true" або "false"..

const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

// Метод "prompt()" виводить модальне вікно з полем введення і кнопками Ok і Cancel. Повертає данні, що ввів користувач, або "null"

const value = prompt('Please enter a number!');
console.log(typeof value); // "string"
console.log(value); // "5"
