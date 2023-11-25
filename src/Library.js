/** @format */

import { bookCollection, bookTemplate } from './variables.js';

class Library {
  constructor() {
    this.key = 'Awesome Books';
    this.books = this.loadBooks();
  }

  loadBooks() {
    const booksString = localStorage.getItem(this.key);
    return JSON.parse(booksString) || [];
  }

  saveBooks() {
    localStorage.setItem(this.key, JSON.stringify(this.books));
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  renderBook(book) {
    const { title, author, id } = book;
    const templateClone = bookTemplate.content.cloneNode(true);
    const bookItem = templateClone.querySelector('#bookWrapper');
    const bookTitleEle = templateClone.querySelector('#bookTitle');
    const bookAuthorEle = templateClone.querySelector('#bookAuthor');
    bookItem.dataset.bookId = id;
    bookTitleEle.textContent = title;
    bookAuthorEle.textContent = author;
    if (this.books.indexOf(book) % 2 !== 0) bookItem.classList.add('bg-gray-300');
    bookCollection.appendChild(templateClone);
  }

  removeBook(bookId) {
    const index = this.books.findIndex((book) => String(book.id) === bookId);
    if (index === -1) return;
    this.books.splice(index, 1);
    this.saveBooks();
  }
}

export default Library;