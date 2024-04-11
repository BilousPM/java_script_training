//Масив об'єктів

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
    available: true,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
    available: false,
  },
  {
    title: 'Сон смішної людини',
    author: 'Федір Достоєвський',
    rating: 7.75,
    available: true,
  },
];

// console.table(books);
// for (book of books) {
//   console.log(book);
//   book.genres = 'actoins';
// }
// console.log(books);
// -----------------------------------

// const getBookByTitle = function (allBooks, title) {
//   for (book of books) {
//     if (book.title === title) return 'Знайшли';
//   }
//   return 'Не знайшли';
// };

// console.log(getBookByTitle(books, 'Сон смішної людини'));
// console.log(getBookByTitle(books, 'Сон смішї людини'));

// -------------------------------
// const getAllAuthors = function (allBooks) {
//   const allAuthors = [];
//   for (book of books) {
//     allAuthors.push(book.author);
//     console.log(book.author);
//   }
//   return allAuthors;
// };

// console.log(getAllAuthors(books));
// ---------------------------------------

// const getAllAvailable = function (allBooks) {
//   const allAvalible = [];
//   for (book of allBooks) {
//     console.log(book.available);
//     if (book.avalible) {
//       allAvalible.push(book.avalible);
//     }
//   }
//   return allAvalible;
// };
// console.log(books);

// ------------------------------
const getBooksByStatus = function (books) {
  const bookStatus = {
    available: [],
    notAvalible: [],
  };
  for (book of books) {
    if (book.available) {
      bookStatus.available.push(book);
      continue;
    }
    bookStatus.notAvalible.push(book);
  }
  return bookStatus;
};
console.log(getBooksByStatus(books));
