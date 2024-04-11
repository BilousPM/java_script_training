// ----------------------- Масиви ------------

// const frends = ['Mango', 'Kiwi', 'Poli', 'Ajax', 'Appl', 'Blum'];
// console.log(frends);
// console.log(frends.length);
// console.table(frends);

// ------------останній індекс -------------

// const lastIndex = frends.length - 1;
// console.log(lastIndex);

// --------- звернення до елементів мпсиву ------------
// console.log(frends[4]);

// ---------------- перевизначення едлемента масиву -----
// frends[3] = 'Bilous';
// console.log(frends);

// ---- Примітиви {передаються і порівнюються по значенню} ---

// let c = 10;
// let d = c;

// console.log('c', c);
// console.log('d', d);

// c = 40;

// console.log('c', c);
// console.log('d', d);

// ---- Масиви (складнітипи данних) {передаються по посиланню, порівнюються по адрессі}-----

// const a = [1, 2, 3, 4];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[2] = 550;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// --------------------- Ітерація масиву --------- "FOR"
const frends = ['Mango', 'Kiwi', 'Poli', 'Ajax'];
console.log(frends);
const lastIndex = frends.length - 1;

for (let i = 0; i <= lastIndex; i += 1) {
  console.log(i);
  console.log(frends[i]);
}

// --------------------- Ітерація масиву --------- "FOR  OF"
// використовується, коли не потрібен індекс елемента, та не потріно змінювати елемент масиву.

for (const friend of frends) {
  console.log(friend);
}

// Оператори break і continue​
const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Poly';
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}
console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

// Examples of tasks

// напиши скрипт що підраховує суму всіх парних чиселж

const salary = [23, 44, 87, 94, 38, 62, 24, 2, 10];
let sum = 0;

// for (const sal of salary) {
//   if (sal % 2 === 0) {
//     sum += sal;
//   }
// }
// console.log(sum);

// авріант від зворотнього:
for (const sal of salary) {
  if (sal % 2 !== 0) {
    continue;
  }
  sum += sal;
}
console.log(sum);

// пошук найменшого числа..
let smolestNumber = salary[0];
for (const number of salary) {
  if (number < smolestNumber) {
    smolestNumber = number;
  }
}
console.log(smolestNumber);

let bigestNumber = salary[0];
for (const number of salary) {
  if (number > bigestNumber) {
    bigestNumber = number;
  }
}
console.log(bigestNumber);
