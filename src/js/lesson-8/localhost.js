import throttle from 'lodash.throttle';

localStorage.setItem('my-data', 'localstorage');

localStorage.setItem('user', JSON.stringify({ name: 'mango', age: 5 }));

console.log(JSON.parse(localStorage.getItem('user')));

sessionStorage.setItem('my-data', 'qweqweqweqweqweqwe');
// -----------------------------------------------

const STORAGE_KEY = 'feetback';

const formRef = document.querySelector('.js-feedback-form');
const inputMessgeRef = document.querySelector('.js-feedback-form textarea');

populateMessageOutput();

formRef.addEventListener('submit', hendleFormSubmit);
inputMessgeRef.addEventListener('input', throttle(hendleTextareaInput, 2000));

function hendleFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function hendleTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateMessageOutput(params) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
  }
  // console.log(savedMessage);
  inputMessgeRef.value = savedMessage;
}
