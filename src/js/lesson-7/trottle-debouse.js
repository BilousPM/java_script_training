import technologies from '../../data/technologies';

// document.addEventListener(
//   'mousemove',
//   _.throttle(hendleMousMoveEventTrot, 1000)
// );
// document.addEventListener('mousemove', hendleMousMoveEvent);

// document.addEventListener('mousemove', _.debounce(hendleMousMoveEvent, 300));
let mouseMove = 0;
let mouseMoveTrot = 0;

function hendleMousMoveEvent(e) {
  mouseMove += 1;
  console.log('mouseMove', mouseMove);
}

function hendleMousMoveEventTrot(e) {
  mouseMoveTrot += 1;
  console.log('mouseMoveTrot', mouseMoveTrot);
}

//фільтр з пошуком

const dataInputRef = document.querySelector('#filter');
const techListRef = document.querySelector('.js-list');

dataInputRef.addEventListener('input', _.debounce(hendleInputFiltered, 300));

const murcupList = createTechListMurup(technologies).join('');

populateList(murcupList);

function createTechListMurup(technologies) {
  return technologies.map(({ label }) => `<li>${label}</li>`);
}

function hendleInputFiltered(e) {
  const filter = e.target.value.toLowerCase();

  const filtredItems = technologies.filter(tech =>
    tech.label.toLowerCase().includes(filter)
  );
  const filtredListMurkUp = createTechListMurup(filtredItems).join('');
  populateList(filtredListMurkUp);
}

function populateList(markup) {
  techListRef.innerHTML = markup;
}

//Fuse.js  //пушистий пошук
