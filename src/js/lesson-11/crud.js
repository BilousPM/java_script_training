const BASE_URL = 'http://localhost:8000';

//                     "GET"
const getBooks = () =>
  fetch(`${BASE_URL}/books`, { method: 'GET' }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
// отримання книги по Id ідентифікатору
const getBookById = bookId =>
  fetch(`${BASE_URL}/books/${bookId}`, { method: 'GET' }).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });

// getUsers()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// getBooks().then(console.log).catch(console.log);
// getBookById('cb04').then(console.log).catch(console.log);

// ================================================
//                      "POST"

const newBook = {
  title: 'Гаррі Потер и філософьський камінь',
  author: 'Джоан роулінг',
  genres: ['пригоди, фентезі'],
  rating: 9.56,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook(newBook)
// .then(renderBook)
// .catch(error => console.log(error));

function renderBook(book) {
  console.log('прийшла відповідь, можна малювати', book);
}

// =======================================
//                 "PUT"    "PATCH"

const changedBook = {
  title: 'Гаррі Потер і таємна кімната',
  rating: 96.48,
};

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
// updateBookById(changedBook, 'b433').then(console.log);
// updateBookById(
//   { title: 'Гаррі Потер і вязень Азкабану', rating: 9.45 },
//   'd9e7'
// ).then(console.log);
// updateBookById(
//   { title: 'Гаррі Потер і кубок вогню', rating: 9.0 },
//   '22b2'
// ).then(console.log);
// updateBookById(
//   { title: 'Гаррі Потер і дари смерті', rating: 8.36 },
//   '1a17'
// ).then(console.log);

// ============================================================
//                             "DELETE"

function removeBookById(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

// removeBookById('id');
