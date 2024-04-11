// Метод "Number()" Приведення данних до числа
let quantity = prompt('Enter your adge');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);

// Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення "NaN"

// Метод "Number.parseInt()" парсить цілу частину від числа
// let elementWidth = '80px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// Метод "Number.parseFloat()" парсить цілу частину від числа
// let elementHidth = '80.44px';
// const result2 = Number.parseFloat(elementHidth);
// console.log(result2);

//Метод ".toFixed"
// let salary = 123.4567;
// salary = salary.toFixed(3);
// salary = Number(salary);
// console.log(salary);
// or
// console.log(Number(salary.toFixed(3)));

// Перевірка на число, метод Number.isNaN(val)

const validNumber = Number('51'); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true

// ================ Клас "Math" =================
// "Math": (Math.pow())
// .pow() - степінь
// .random() - рандомне число
// .round() - округлення числа
// .max(num1, num2, ...) - повертає найбільше ціле число з набору

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// or
// console.log(base ** power);
// console.log(result);

// генерація псевдовипадкового числа
// console.log(Math.random());

// const max = 100;
// const min = 0;
// let theNumber;
// theNumber = Math.round(Math.random() * (max - min) + min);
// console.log(theNumber);

// Use case генерації випадкових чисел
const colors = ['tomato', 'teal', 'blue', 'red', 'yellow', 'orange'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);

document.body.style.backgroundColor = color;
