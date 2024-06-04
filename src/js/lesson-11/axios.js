import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

//                     "GET"

// const getBooks = () =>
//   fetch(`${BASE_URL}/books`, { method: 'GET' }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });

// getBooks().then(console.log).catch(console.log);

// axios
const getBooksAx = () => axios.get(`${BASE_URL}/books`);

getBooksAx()
  .then(({ data }) => console.log(data))
  .catch(console.log);

// --------------------------------------------------
//                      "POST"

// const newBook = {
//   title: 'Гаррі Потер и філософьський камінь',
//   author: 'Джоан роулінг',
//   genres: ['пригоди, фентезі'],
//   rating: 9.56,
// };

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => res.json());
// }

// addBook(newBook)
// .then(renderBook)
// .catch(error => console.log(error));

// axios

const newBook = {
  title: 'Думай повільно... Вирішуй швидко',
  author: 'Деніель Канеман',
  genres: ['психологія'],
  rating: 9.56,
};

function addBook(newBook) {
  return axios.post(`${BASE_URL}/books`, newBook);
}

function renderBook(book) {
  console.log('прийшла відповідь, можна малювати', book);
}

// addBook(newBook)
//   .then(data => {
//     renderBook(data);
//   })
//   .catch(error => console.log(error));
// ---------------------------------------------------------------------
//                 "PUT"    "PATCH"

// const changedBook = {
//   title: 'Гаррі Потер і таємна кімната',
//   rating: 96.48,
// };

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
// }

// axios
const changeBook = (bookId, informUpdate) =>
  axios.patch(`${BASE_URL}/books/${bookId}`, informUpdate);

// changeBook('59e2', {
//   title: 'Атомні звички',
//   author: 'Джеймс Клір',
//   genres: ['психологія особистості', 'персональна трасформація'],
//   rating: 10.0,
// })
//   .then(console.log)
//   .catch(console.log);

// changeBook('259e', {
//   title: 'Самурай без меча',
//   author: 'Кітамі Масао',
//   genres: ['східна філософія'],
//   rating: '9ю19',
// })
//   .then(console.log)
//   .catch(console.log);

// --------------------------------------------------------------
//                             "DELETE"

// function removeBookById(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
// }
// axios

const removeBookById = bookId => axios.delete(`${BASE_URL}/books/${bookId}`);

// removeBookById('dd59').then(console.log).catch(console.log);
