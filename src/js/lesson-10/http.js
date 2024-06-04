//  Web Serwer - динамічно генерує html на сервері
// API Server - просто віддає данні в форматі JSON, а вже клієнт (браузер) відмальовує сторінку..
// Основні HTTP ьетоди
// GET - отримати данні;
// POST - відправити данні, і створити нові;
// PUT and PATCH - відправити данні, і обновити існуючі;
// DELETE - видалити існуючі данні

// HTTP Status Codes Glossary
// httpstatuses.com
// https://httpstatuses.com

//методи парса двнних: text(), json(), blob()

import API from '../lesson-10/api-service';
import getRefs from '../lesson-10/refs';

const refs = getRefs();

//------- Закоментовано ддя роботи з пагінацією -------
refs.formRef.addEventListener('submit', hendleSearchFormClick);

function renderPokemonCard(pokemon) {
  const murkup = makeMurkup(pokemon);
  refs.cardContainerRef.innerHTML = murkup;
}

function makeMurkup({ sprites, name, weight, height }) {
  const marking = `<div class='csrd'>
  <div class='card-img-top'>
    <img src='${sprites.front_default}' alt='' srcset='' />
  </div>
  <div class='card-body'>
    <h2 class='card-title'>Name: ${name}</h2>
    <p class='card-text'>Weight: ${weight}</p>
    <p class='card-text'>Hight: ${height}</p>
    <p class='card-text'><b>Вміння</b></p>
  </div>
</div>`;
  return marking;
}

function hendleSearchFormClick(e) {
  e.preventDefault();

  const form = e.currentTarget;
  let searchQuery = form.elements.query.value;
  API.fetchPokemonId(searchQuery)
    .then(renderPokemonCard)
    .catch(onCatchError)
    .finally(() => form.reset());
}

function onCatchError() {
  alert('we can not faund this pokemon');
}

// =========================================

const url =
  'https://newsapi.org/v2/everything?q=fish&language=en&sortBy=popularity';

const options = {
  headers: {
    'X-Api-Key': 'a084699e34654c649a85877972cf0cce',
  },
};
// fetch(url, options)
//   .then(respons => respons.json())
//   .then(console.log);
