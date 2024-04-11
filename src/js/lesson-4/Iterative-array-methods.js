// === Метод " forEach()" === - Метод перебирання масиву
//  Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу

const numbers = [1, 3, 6, 45, 87, 3, 90, 7];
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// === Метод map() === - Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.
// массив.map((element, index, array) => {
// Тіло колбек-функції
// }); Returns a new arrey of the same lengs
const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
  { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['фізкультура', 'хімія'] },
  { name: 'Ківі', score: 94, courses: ['геометрія', 'алгебра'] },
  { name: "Х'юстон", score: 64, courses: ['природа', 'історія'] },
];
// const names = students.map(student => ({
//   ...student,
//   name: student.name + '-Man',
// }));

const names = students.map(student => student.name);
console.log(names);
console.log(students);

// === Метод flatMap() ===
// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».  Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().
const allCourses = students.flatMap(student => student.courses);
console.log(allCourses);
console.log(students);

// === Метод filter() ===
// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм. Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

const uniqueCourses = allCourses.filter((course, index, array) => {
  array.indexOf(course) === index;
});
console.log(uniqueCourses);
// ----------------------------------
const BEST_STUDENT_SCORE = 80;
const bestStudents = students.filter(
  student => student.score >= BEST_STUDENT_SCORE
);
console.log(bestStudents);
console.log(students);

// === Метод find() ===
// метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу. Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості
const name = 'Аякс';
const findStudent = students.find(student => student.name === name);
console.log(findStudent);
console.log(students);
// ----------------------
const findSomeWithHIghScore = function (array, Score) {
  const findStudentByScore = array.find(student => {
    return student.score < Score;
  });
  return findStudentByScore;
};

console.log(findSomeWithHIghScore(students, 80));

//=== Метод findIndex() ===;
// Метод findIndex(callback) - це сучасна заміна методу indexOf(). Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність. Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.
// Return: індекс першого елемента or -1
const findIdCours = 'хімія';
const coursIndex = allCourses.findIndex(cours => cours === findIdCours);
console.log(coursIndex);

//-----------------   Методи every() і some()   --------------
//=== Метод every() ===​ Не змінює оригінальний масив.
// Перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false
// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

//===  Метод some()​ === Не змінює оригінальний масив.
// Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// -----------------------------------------------------
const fruits = [
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

//=== Метод reduce() === -Не змінює оригінальний масив.

// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue * number;
}, 100);

console.log(total);
// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

console.log(totalScore);
// ----------------------------
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);
const allTags = getTags(tweets);
console.log(allTags);
// variant - 1
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagsStats);

// variant - 2
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);
console.log(tagsStats);

const user = {
  name: 'mango;',
};
const key = 'name';
console.log(user[key]);

// Метод sort()
// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.
// ascending -висхідний;
// descending - спадання;
//  ------------- sorting numbers --------------

const sortNumbers = [61, 19, 74, 35, 92, 56];
console.log(sortNumbers);

const ascCoppyNumbers = [...sortNumbers].sort((a, b) => a - b);
const descCoppyNumbers = [...sortNumbers].sort((a, b) => b - a);

console.log(ascCoppyNumbers);
console.log(descCoppyNumbers);

//-------------------- sorting objekts ----------------
const sortTweets = [...tweets].sort(
  // descending
  // (firstTweet, secondTweet) => secondTweet.likes - firstTweet.likes
  // ascending
  (firstTweet, secondTweet) => firstTweet.likes - secondTweet.likes
);

console.log(sortTweets);

//  ----------------  alphabetical sorting -----------------
// Свій порядок сортування рядків​

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

const studentsSort = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
console.log(studentsSort);

const inAlphabetOrder = [...studentsSort].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...studentsSort].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']
const sortName = [...students].sort((a, b) => {
  const f = a.name;
  const g = b.name;

  return g.localeCompare(f);
});

console.table(sortName);
console.table(students);
