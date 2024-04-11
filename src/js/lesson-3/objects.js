// -====== Objects ======- {} - літерал обєкту
const book = {
  title: 'The last kindom',
  author: 'Bernard Cornwel',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.95,
};

console.table(book);
console.log(book);

// Вкладені властивості, можуть бути тнші обєкти та масиви.
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
// звернення до властивостей   "об'єкт.ім'я_властивості"
// звернення до вкладенних властивостей  "об'єкт.вкладенний_обєкт.ім'я_властивості" та через [index] якщо це масив.

// другій спосіб звернення через квадратні дужки "об'єкт["ім'я властивості"]"
console.log(user['tag']);

// зміна значення
book.author = 'Taras SHevchenko';
book.genres.push('comedy');

// Додавання властивостей​. Якщо під час запису значення за ім'ям, така властивість в об'єкті відсутня, вона буде створена.

book.weight = 1.3;
console.log(book);

// Короткі властивості​ (shorthand properties)

const name = 'Генрі Сибола';
const age = 25;

const userNew = {
  // name: name,
  // age: age,
  name,
  age,
};

console.log(userNew.name);
console.log(userNew.age);

// Обчислювальні властивості (computed properties [])

const inputName = 'color';
const inputValue = 'tomsto';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

// Методи об'єкта (функції в обєктах)

const playlist = {
  name: 'My favorite hits ',
  rating: 4.5,
  tracks: ['track-1', 'track-2', 'track-3', 'track-4,', 'track-5'],
  trackCoun: 5,
  //old syntax
  getName: function (a) {
    fn = console.log('Fn getname', a);
  },
  //modern syntax
  function(a) {
    fn = console.log('Fn getname', a);
  },

  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
};

playlist.getName(4);

playlist.changeName('super play list');
playlist.addTrack('track-6');
playlist.updateRating(4);
console.log(playlist);

//         Перебирання об'єкта  Цикл "for...in​"

console.log(book);
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

//конструкори : Number Boolean Array Object

// Метод Object.keys() отримання ключів без for...in

const keys = Object.keys(playlist);
console.log(keys);
for (key of keys) {
  console.log(key);
  console.log(playlist[key]); //значення ключа
}

// знаходім кількість властивостей в обєкті:
const x = {
  a: 1,
  s: 2,
  d: 3,
  f: 4,
  g: 6,
};
console.log('Кількість властивостей в обєкті :', Object.keys(x).length);

//​ Метод Object.values()​ отримання значень ключів обєкта
const values = Object.values(playlist);
console.log(values);
for (value of values) {
  console.log(value);
}

// Метод Object.entries() отримання масива з масивами [ключ : значення]
const abv = Object.entries(playlist);
console.log(abv);

// Метод hasOwnProperty()

// Метод Object.create()
