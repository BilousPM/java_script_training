// spread: передача аргументів

const temps = [14, -4, 25, 8, 11];

console.log(Math.max(...temps));

// spread: створення нового масиву
// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps];
console.log(copyOfTemps);

// «склеїти» довільну кількість масивів в один новий.
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
// старий запис
const newArray = [].concat(lastWeekTemps, currentWeekTemps);
console.log(newArray);

const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps);

// spread: створення нового об'єкта​

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
// старий запис:
const newObj = Object.assign({}, first, second);
console.log(newObj);

const third = { ...first, ...second };
console.log(third);

// Під час розподілу можна додавати властивості у довільне місце.

const fourth = { propE: 20, ...first, ...second };
console.log(fourth);

// ---- rest: збирання всіх аргументів функції​ ---

function multiply(...args) {
  console.log(args);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

// ----------------------
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

const { name, tag, locstion, ...restProps } = user;
console.log(name, tag, location);
console.log(restProps);

// ----------------------------
