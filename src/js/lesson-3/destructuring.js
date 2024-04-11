// Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні.
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

console.log(user.name);
console.log(user.tag);
console.log(user.location);
console.log(user.stats);
// дефолтне значення властивостей "midlName = 'Orko'"
const { name, tag, lokation, stats: myRating, midlName = 'Orko' } = user;
// Глибока деструктуризація​
const { followers, views, likes } = myRating;
// або відразу ж в :"location: { country, city },"
// const {
//   name,
//   tag,
//   location: { country, city },
//   stats: myRating,
//   midlName = 'Orko',
// } = user;
// console.log(country);

console.log(name);
console.log(tag);
console.log(location);
// console.log(stats);
console.log(midlName);

// заміна імені зминної "stats: myRating"
console.log(myRating);

// --------------------------------------------
// Деструктуризація масивів

const rgb = [255, 100, 98];
console.log(rgb);

const [a, b, c] = rgb;

console.log(a, b, c);

const authors = {
  kivi: 4,
  poli: 7,
  ajax: 9,
  mango: 6,
};
const entries = Object.entries(authors);
console.log(entries);

for (const entry of entries) {
  // рівень 3
  // for (const [name, rating] of entries) {
  // рівень 2
  const [name, rating] = entry;
  // рвень 1
  // const name = entry[0];
  // const rating = entry[1];

  console.log(name, rating);
}

// ---------------------------
// Патерн «Об'єкт параметрів»
const showUserInfo = function (userProfile) {
  // деструктуризація обєкта параметрів (user 2 рядок)
  const { name, tag, location, stats } = userProfile;
  console.log(name, tag, location, stats);
};

showUserInfo(user);
