const bookList = document.querySelector('#bookList');
const bookForm = document.querySelector('#bookForm');
const bookTitleInput = document.querySelector('#bookTitle');
const bookAuthorInput = document.querySelector('#bookAuthor');
const template = document.querySelector('#bookItemTemplate');
const BOOKS_STORAGE_KEY = 'Awesome-Books';

function renderBook(book) {
  const templateClone = template.content.cloneNode(true);
  const bookItem = templateClone.querySelector('#bookWrapper');
  bookItem.dataset.bookId = book.id;
  const bookTitleEle = templateClone.querySelector('#bookTitle');
  const bookAuthorEle = templateClone.querySelector('#bookAuthor');
  bookTitleEle.textContent = book.title;
  bookAuthorEle.textContent = book.author;
  bookList.appendChild(templateClone);
}

function loadBooks() {
  const booksString = localStorage.getItem(BOOKS_STORAGE_KEY);
  return JSON.parse(booksString) || [];
}
let books = loadBooks();

function saveBooks() {
  localStorage.setItem(BOOKS_STORAGE_KEY, JSON.stringify(books));
}
function deleteBook(bookId) {
  books = books.filter((book) => book.id !== bookId);
  saveBooks();
}

books.forEach(renderBook);
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  if (!bookTitle || !bookAuthor || bookAuthor === bookTitle) return;
  const newBook = {
    title: bookTitle,
    author: bookAuthor,
    id: new Date().valueOf().toString(),
  };
  books.push(newBook);
  renderBook(newBook);
  saveBooks();
  bookTitleInput.value = '';
  bookAuthorInput.value = '';
});
bookList.addEventListener('click', (e) => {
  if (!e.target.matches('[data-button-delete]')) return;
  const parent = e.target.closest('#bookWrapper');
  const { bookId } = parent.dataset;
  parent.remove();
  deleteBook(bookId);
});