//====== Методи split() і join()​ =====
// split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);

const chars = str.split('');
console.log(chars);

const strCopy = str.split();
console.log(strCopy);

// join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.

console.log(words.join());
console.log(words.join(''));
console.log(words.join('- // -'));

// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Pjhjholy'));

// Метод includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно.

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.includes('Poly'));
console.log(clients.includes('Monkong'));

// Методи push() і pop()​ та unshift() і shift() Додають або видаляють крайні елементи масиву. Працюють тільки з крайнім лівим і крайнім правим елементом
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
numbers.unshift(9);
numbers.pop();
numbers.push(54);
numbers.shift();
console.log(numbers);

// Метод  slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

const friends = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(friends);
console.log(friends.slice(1, 3));

// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.

const clients1 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients1.slice());

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.

const clients2 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients2.slice(1));
console.log(clients2.slice(2));
console.log(clients2);

// Метод splice() Видаляє, додає і замінює елементи у довільному місці масиву. змінює вихідний масив і повертає масив, що містить видалені елементи.

// Щоб видалити елементи в масиві, передаються два аргументи splice(position, num); position - вказує на позицію (індекс) першого елемента для видалення /num - визначає кількість елементів, що видаляються

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers3);
const spliseNumbers3 = numbers3.splice(3, 2);
console.log(spliseNumbers3);
console.log(numbers3);

// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.
// splice(position, 0, new_element_1, new_element_2, ...)

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const addNumbers = numbers4.splice(3, 0, 34, 98);
console.log(addNumbers);
console.log(numbers4);

// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const changeNumbers = numbers5.splice(3, 2, 66, 54);
console.log(changeNumbers);
console.log(numbers5);

// Метод concat()​ Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst);

// Examples of tasks

// Написати скрипт, який розвертає рядок навпаки

// variant 1

// let string = 'Welcome to the future';
// const stringArray = string.split(' ');
// console.log(stringArray);
// const stringRevers = stringArray.reverse();
// console.log(stringRevers);
// string = stringRevers.join(' ');
// console.log(string);

// or short note
// let string = 'Welcome to the future';
// const stringArray = string.split(' ').reverse().join(' ');
// console.log(stringArray);

// variant 2

const string = 'Welcome to the future';
let newString = '';
for (let i = 0; i < string.length; i += 1) {
  newString = string[i] + newString;
}
console.log(newString);
