import Library from './Library.js';
import Book from './Book.js';
import {
  bookCollection,
  bookForm,
  bookTitleInput,
  bookAuthorInput,
  mobileNavToggle,
  navigation,
  navigationLinks,
  bookListLink,
  activeNavigationLink,
  bookList,
  bookCreate,
  contactUs,
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
  if (activeNavigationLink) {
    activeNavigationLink.removeAttribute('aria-current');
    activeNavigationLink.classList.remove('text-blue-700');
  }
  bookListLink.setAttribute('aria-current', 'page');
  bookListLink.classList.add('text-blue-700');
  bookList.classList.remove('hidden');
  bookCreate.classList.add('hidden');
  contactUs.classList.add('hidden');
});

bookCollection.addEventListener('click', (event) => {
  if (!event.target.matches('[data-button-delete]')) return;
  const parent = event.target.closest('#bookWrapper');
  const { bookId } = parent.dataset;
  parent.remove();
  bookLibrary.removeBook(bookId);
});

navigationLinks.forEach((navLink) => {
  navLink.addEventListener('click', (event) => {
    const clickedLink = event.target;
    if (clickedLink.id === 'list') {
      bookList.classList.remove('hidden');
      bookCreate.classList.add('hidden');
      contactUs.classList.add('hidden');
    } else if (clickedLink.id === 'create') {
      bookCreate.classList.remove('hidden');
      bookList.classList.add('hidden');
      contactUs.classList.add('hidden');
    } else if (clickedLink.id === 'contact') {
      contactUs.classList.remove('hidden');
      bookList.classList.add('hidden');
      bookCreate.classList.add('hidden');
    }
    navigationLinks.forEach((otherLink) => {
      if (otherLink !== clickedLink) {
        otherLink.removeAttribute('aria-current');
        otherLink.classList.remove('text-blue-700');
      }
    });
    clickedLink.setAttribute('aria-current', 'page');
    clickedLink.classList.add('text-blue-700');
    navigation.classList.toggle('hidden');
  });
});

mobileNavToggle.addEventListener('click', () => {
  navigation.classList.toggle('hidden');
});
