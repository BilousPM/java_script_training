const refs = {
  boxRef: document.querySelector('#boxes'),
  controls: document.querySelector('#controls'),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destoryBtn: document.querySelector('button[data-destroy]'),
  body: document.querySelector('body'),
};

refs.createBtn.addEventListener('click', hendlerClickCreateBtn);
refs.boxRef.addEventListener('click', hendleClickBoxDiv);
refs.destoryBtn.addEventListener('click', destroyBoxes);

function hendlerClickCreateBtn() {
  const allBoxes = createBoxes(refs.input.value);
  refs.boxRef.append(...allBoxes);
}

function createBoxes(amount) {
  const divBox = [];
  for (let i = 1; i <= amount; i += 1) {
    divBoxRef = document.createElement('div');
    divBoxRef.classList.add('color');
    let color = getRandomHexColor();
    divBoxRef.style.backgroundColor = color;
    divBoxRef.textContent = `${color}`;
    divBox.push(divBoxRef);
  }
  refs.boxRef.classList.add('color-box');
  return divBox;
}

function hendleClickBoxDiv(e) {
  if (!e.target.classList.contains('color')) {
    return;
  }

  const activeBox = document.querySelector('.current');
  // if (activeBox) {
  //   activeBox.classList.remove('current');
  // } //or
  activeBox?.classList.remove('current');
  e.target.classList.add('current');
  refs.body.style.backgroundColor = e.target.textContent;
  // console.log(e.target.nodeName);
  // console.log(e.target.textContent);
  // console.log(e.currentTarget);
}

function destroyBoxes() {
  refs.boxRef.innerHTML = '';
  refs.body.style.backgroundColor = '#fff';
  refs.input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Прsклад делегування наведенний в функції "hendleClickBoxDiv"

//оператор необовязкової властивості прикад :
const settings = {
  theme: {
    userDefined: {
      color: 'qwerty',
    },
  },
};

if (settings && settings.theme && settings.theme.userDefined) {
  console.log(settings.theme.userDefined.color);
}

//or another variant
console.log(settings?.theme?.userDefined?.color);

// const parentColorCard = swatchEl.parentNode;
// contains() - метод, що перевіряє наявність классу в елементі;
// .parentNode - показує батька улумента.(хранить ссилку на батька);
// .closest('selector') - іде вверх по вложенностях, до вказанного селектораж
// .nodeName - властивість елемента події (event.target.nodeName);
// Java Script guard Clauses - Патерн:"якщо не влаштовує, виходим (if(!'true'){return};
// Оператор "?" - заміняє в деяких випадках if (Відос репети М:7, З:1 (39 хв));
// const selElem = new Set(); -набір унікальних елементів;
