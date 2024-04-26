import products from '../../data/products';

const magicBtn = document.querySelector('.js-button');
console.log(magicBtn);

const navEL = document.querySelector('.site-nav__item');
const allNavEl = document.querySelectorAll('.site-nav__item');
const navLinkEl = navEL.querySelector('.site-nav__link');

const imageEL = document.querySelector('.hero__image');
console.dir(imageEL);
console.log('🚀 ~ imageEL:', imageEL.src);
// imageEL.alt = 'whatever';
// imageEL.src =
//   'https://images.pexels.com/photos/6128138/pexels-photo-6128138.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load';
console.log(imageEL.alt);

// ELL.getAttribute('src') - Метод повертає значення атрибуту;
// ELL.removeAttribute('src') - Видaляє атрибут;
// ELL.hasAttribute('src') - Перевіряє чи є атрибут
// ELL.setAttribute('src') - додає атрибут
console.log(imageEL.getAttribute('src'));
//textContent - доступ до текстового контенту елемента;
const heroTitleEl = document.querySelector('.herro-title');
heroTitleEl.textContent = 'Hello World, hello JS';
console.dir(heroTitleEl.textContent);

//Data-atribute
//.dataset - дає можливість достукатись до атрибуту
const actionsEl = document.querySelectorAll('.js-actions button');
console.log(actionsEl[2].dataset);
console.log(actionsEl[2].dataset.action);

// .value - зберігає данні форми
// magicBtn.addEventListener('click', () => {
//   const inputEl = document.querySelector('.js-input');
//   console.log(inputEl.value);
//   inputEl.value = 'fjifomoedqLkx lkwxxawwdw';
// });

// .classList -
//.classList.add("qweqwe")
// .classList.remove("qweqwe")
// .classList.toggle('qweqwe')
// .replace('old-class', 'new-class')
// .contains('qweqwe')
const navUlEl = document.querySelector('.site-nav__link');
navUlEl.classList.add('site-nav__link__curent');
// navUlEl.classList.remove('site-nav');
console.log(navUlEl.classList);

magicBtn.addEventListener('click', () => {
  // navUlEl.classList.toggle('site-nav__link__curent');
  // navUlEl.classList.replace('site-nav__link__curent', 'new-class');
  // console.log(navUlEl.classList.contains('qweqwe'));
});

const currentPageUrl = '/contact';
const linkEl = document.  (
  `.site-nav__link[href='${currentPageUrl}']`
);

linkEl.classList.add('site-nav__link__visited');
console.log(linkEl);

//Інлайнові стилі === ell.style.backgroundColor = "lightorange" (Властивість в кемел кейсі)
heroTitleEl.style.backgroundColor = 'lightBlue';
heroTitleEl.style.cssText =
  'color: yellow; font-size:60px; background-color: teal;';

// Для навігації по ієрархії елементи мають наступні властивості.

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

const siteNavEl = document.querySelector('.site-nav');
console.log(siteNavEl.parentNode);
console.log(siteNavEl.childNodes);
console.log(siteNavEl.children);
console.log(siteNavEl.firstChild);
console.log(siteNavEl.firstElementChild.nextElementSibling);
console.log(siteNavEl.previousSibling);

// ===== .createElement() ======
const titleEl = document.createElement('h2');
titleEl.classList.add('subtitle');
titleEl.textContent = "It's subtitle ha ha ha";
console.log(titleEl);

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, для цього існують методи.

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element
heroTitleEl.append(titleEl);
heroTitleEl.prepend(titleEl);
heroTitleEl.after(titleEl);
heroTitleEl.before(titleEl);

// element.appendChild();
// element.insertBefore()

//=== додаваня в DOM дерево за одну операцію ===
const aboutListEl = document.createElement('ul');
aboutListEl.classList.add('about-list');
aboutListEl.textContent = 'About Us';

const aboutItemEL = document.createElement('li');
aboutItemEL.classList.add('about-item');

const aboutLinkEl = document.createElement('a');
aboutLinkEl.classList.add('about-link');
aboutLinkEl.textContent = 'Follow US';

const aboutImageEl = document.createElement('img');
aboutImageEl.src = 'https://picsum.photos/id/9/320/240';
aboutImageEl.width = 200;

aboutItemEL.append(aboutLinkEl);
aboutListEl.append(aboutItemEL);

heroTitleEl.after(aboutListEl, aboutImageEl);

//створення колекції елементів

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// const option = colorPickerOptions[4];
// magicBtn.textContent = `${option.label} Magic Button !!`;
// console.log(option.color);
// magicBtn.style.padding = '10px';
// magicBtn.style.borderRadius = '5px';
// magicBtn.style.backgroundColor = option.color;
// console.log(magicBtn);

// const colorButtons = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// colorPickerContainerEl.append(...colorButtons);

const makeMurckup = function (array) {
  return array.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const colorPickerContainerEl = document.querySelector('.js-color-picker');
colorPickerContainerEl.append(...makeMurckup(colorPickerOptions));

// Створення картки товару
// console.log(products);

const cardProduct = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price } = {}) => {
  const productRef = document.createElement('article');
  productRef.classList.add('product');

  const productTitleRef = document.createElement('h2');
  productTitleRef.classList.add('product-title');
  productTitleRef.textContent = name;

  const productDescRef = document.createElement('p');
  productDescRef.classList.add('product-desc');
  productDescRef.textContent = description;

  const productPriceRef = document.createElement('p');
  productPriceRef.classList.add('product-prise');
  productPriceRef.textContent = `Prise: $${price}`;

  productRef.append(productTitleRef, productDescRef, productPriceRef);

  return productRef;
};
const elements = products.map(makeProductCard);
console.log(elements);

cardProduct.append(...elements);

// Властивість ==== innerHTML =====

const thirdTitleRef = document.querySelector('.third-title');
console.log(thirdTitleRef.textContent);
console.log(thirdTitleRef.innerHTML);
// thirdTitleRef.innerHTML = '<a href="">This is a link !!</a>';
// thirdTitleRef.innerHTML = '';

// const spanRef = thirdTitleRef.firstChild;
// spanRef.style.color = 'red';

// Метод ======  insertAdjacentHTML()​ ======

// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem

thirdTitleRef.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="third-title">This is a link !!</a>'
);
