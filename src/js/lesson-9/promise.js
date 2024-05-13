const promise = new Promise((resolve, reject) => {
  const canFulFill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulFill) {
      resolve(' проміс виконався успішно resolve ✅');
    }
    reject('проміс виконався з помилкою reject ❌');
  }, 1000);
});

// then(onSucces, onError)
// console.log(promise);

promise.then(
  result => {
    console.log(result, '✅success');
  },
  error => {
    console.log(error, '❌ error');
  }
);

// ланцюжок промісів..

promise
  .then(result => {
    console.log(result);
    return 'повертає проміс з результатом... ';
  })
  .then(x => {
    console.log(x);
    // throw new Error('помилка в другому then');
    return 'аргумент наступного проміса';
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('😜✅виконується в любому випадку у🤪✅');
  });

// ------- практика промісів ---------
// https://pokeapi.co/api/v2/pokemon/

// fetch('https://pokeapi.co/api/v2/pokemon/6')
//   .then(r => r.json())
//   .then(pokemon => console.log(pokemon))
//   .catch(error => {
//     console.log('it is in catch bloc');
//     console.log(error);
//   });

const fetchPokemonById = function (id) {
  return fetch('https://pokeapi.co/api/v2/pokemon/6').then(r => r.json());
};

console.log(fetchPokemonById(3));

fetchPokemonById(6).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('виконано успішноу🎊');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log(error);
  console.log('це в блоці catch');
}

// ================================================
const makePromis = () => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    if (passed) {
      resolve('✅ hi, it is resolve');
    }
    reject('❌ omg, it is reject');
  });
};

makePromis()
  .then(() => console.log('log resolve ✅'))
  .catch(() => console.log('catch reject ❌'));
console.log();

console.log('log after pomis');
