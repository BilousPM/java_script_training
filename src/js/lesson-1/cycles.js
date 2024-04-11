// пост і пре ікременти  "a++" "++a"

// Цикл "for​"
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Оператор "break​"

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     break;
//   }
// }

// console.log('Лог після циклу');

// Оператор "continue​"

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
// }

// for (let i = 100; i >= number; i -= 1) {
//   if (i % 2 === 20) {
//     continue;
//   }
//   console.log(i);
// }

//задача:
// напиши скрипт, який підраховує сумму зп всіх робітників.
// кількість робітників зберігаєтся в змінній employees
// зп кожного - випадкова сумма від 500 до 5000 кредитів
// саписати сумму в змінну totalSalary і вивисти в консоль

// 1 - зробити вари
// 2 - перебрати робітників за доп циклу
// 3 - сгенерувати випадкове число
// 4 - добавити в тотал

// const minSalary = 3000;
// const maxSalary = 5000;
// const employees = 20;
// let totalSalary = 0;

// for (let i = 1; i <= 20; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`зп робітника ${i} = ${salary}`);
//   totalSalary += salary;
// }

// console.log(totalSalary);
