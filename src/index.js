import Library from './Library.js';
import Book from './Book.js';
import {
  bookList,
  bookForm,
  bookTitleInput,
  bookAuthorInput,
} from './variables.js';

const bookLibrary = new Library();

bookLibrary.books.forEach((book) => {
  bookLibrary.renderBook(book);
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  if (!bookTitle || !bookAuthor) return;
  const newBook = new Book(bookTitle, bookAuthor);
  bookLibrary.addBook(newBook);
  bookLibrary.renderBook(newBook);
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
});

bookList.addEventListener('click', (event) => {
  if (!event.target.matches('[data-button-delete]')) return;
  const parent = event.target.closest('#bookWrapper');
  const { bookId } = parent.dataset;
  parent.remove();
  bookLibrary.removeBook(bookId);
});
