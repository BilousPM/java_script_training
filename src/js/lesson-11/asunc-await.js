// // Function declaration
// async function foo() {
//   // ...
// }

// // Functional expression
// const foo = async function () {
//   // ...
// };

// // Arrow function
// const foo = async () => {
//   // ...
// };

// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };

// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }

// (_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)(_)

//т  Асинхронна функція завжди повертає проміс...

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍏',
    grape: '🍇',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500)
  );
}

async function asyncMakeSmoothie() {
  try {
    // послідовне виконання коду 1500 ms
    // console.time('asyncMakeSmoothie');
    // const apple = await getFruit('apple');
    // const kiwi = await getFruit('kiwi');
    // const strawberry = await getFruit('strawberry');

    // паралельне виконання промісів 500 ms
    console.time('asyncMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const strawberry = getFruit('strawberry');
    const fruits = await Promise.all([apple, kiwi, strawberry]);

    return fruits;

    console.timeEnd('asyncMakeSmoothie');
  } catch (error) {
    console.dir(error);
  }
}
asyncMakeSmoothie().then(console.log);
