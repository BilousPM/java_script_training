// addEventListener('event', callback);
// removeEventListener('event', callback)

const magicBtnRef = document.querySelector('.js-button');
magicBtnRef.addEventListener('click', handleMagicButtonClick);

// патерни неймінгу колбек функцій
// -handle: hendleEvent or hendleSubjectEvent

function handleMagicButtonClick() {
  console.log('click');
}

// патерни неймінгу колбек функцій
// -handler: eventHendler or subjectEventHendler
function magicButtonClickHandler() {
  console.log('click');
}

// патерни неймінгу колбек функцій
// on: on or onSubjectEvent
function onMagicButtonClick(event) {
  console.log('click');
}
// практика add and remuve
const editEventBtnRef = document.querySelector('button[data-action=edit]');
const addEventBtnRef = document.querySelector('button[data-action=add]');
const removeEventBtnRef = document.querySelector('button[data-action=remove]');

addEventBtnRef.addEventListener('click', event => {
  console.log('adds events listner ');
  editEventBtnRef.addEventListener('click', hendleEditBtnClick);
});

removeEventBtnRef.addEventListener('click', event => {
  console.log('removes events listner');
  editEventBtnRef.removeEventListener('click', hendleEditBtnClick);
});

function hendleEditBtnClick(event) {
  console.log(event);
  console.log('click on edit button');
}

// ---------------------------- РОбота з формою ---------------
const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', hendleFormSubmit);

function hendleFormSubmit(event) {
  event.preventDefault();
  // робота з окремими елементами
  // const formElements = event.currentTarget.elements;
  // console.log(formElements.email.value);

  const formData = new FormData(event.currentTarget);
  // робота з данними всієї форми.
  formData.forEach((value, name) => {
    console.log('🚀 ~ formData.forEach ~ name:', name);
    console.log('🚀 ~ formData.forEach ~ value:', value);
  });
}

// Патерн обєкт силок:

const refs = {
  input: document.querySelector('.js-input-name'),
  nameLabel: document.querySelector('.js-span'),
  licens: document.querySelector('.js-checkbox'),
  btn: document.querySelector('.js-btn'),
};

// refs.input.addEventListener('focus', hendleFocusInput);
refs.input.addEventListener('blur', handelBlurInput);
refs.input.addEventListener('change', handelChangeInput);
refs.input.addEventListener('input', handelInputInput);

// function hendleFocusInput() {
//   console.log('This is the input focus');
// }

function handelBlurInput() {
  console.log('This is the input blur');
}

function handelChangeInput(event) {
  //працює при втаті фокусу
  console.log(event.currentTarget.value);
}

function handelInputInput(event) {
  console.log(event.currentTarget.value);
}

//Задачка. Заміна тексту спану на текст з інпуту
refs.input.addEventListener('input', handelInputInputForChangeSpan);
refs.licens.addEventListener('change', handleCangeCheckbox);

function handelInputInputForChangeSpan(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function handleCangeCheckbox(event) {
  console.log(event.currentTarget.checked);
  console.log(refs.btn.disabled);

  refs.btn.disabled = !event.currentTarget.checked;
}

// <!-- події клавіатури -->

const elements = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};
// keypress - тільки ті, що генерують символ, (keydown, keyup) - всі клавіші
window.addEventListener('keydown', hendleKeydown);
// window.addEventListener('keyup', hendleKeyup);
// window.addEventListener('keypress', hendleKeypress);
elements.clearBtn.addEventListener('click', hendleClickBtn);

function hendleKeypress(event) {
  elements.output.textContent += event.key;
  // console.log('keypress', event);
  // console.log('keypress', event.key);
  // console.log('keypress', event.code);
}
// key зберигає символ
// code зюерігає клавішу

function hendleKeydown(event) {
  console.log('keydown', event.key);
}

function hendleKeyup(event) {
  console.log('keyup', event.key);
}

function hendleClickBtn() {
  elements.output.textContent = '';
}

// події мишки
// 'mouseenter', 'mouseleave', 'mouseover', 'mouseout','mousemove',
