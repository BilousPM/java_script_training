const BASE_URL = 'http://localhost:8000';

const getBooks = async () => {
  const respons = await fetch(`${BASE_URL}/books`);

  return await respons.json();
};

// отримання книги по Id ідентифікатору

const getBookById = async bookId => {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  return await response.json();
};

// getUsers()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));
// getBooks().then(console.log).catch(console.log);
// getBookById('cb04').then(console.log).catch(console.log);

//використання

async function renderBooks() {
  try {
    const book = await getBooks();
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

// renderBooks();
