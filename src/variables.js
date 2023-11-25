/** @format */

const bookCollection = document.querySelector('#bookCollection');
const bookForm = document.querySelector('#bookForm');
const bookTitleInput = document.querySelector('#bookTitle');
const bookAuthorInput = document.querySelector('#bookAuthor');
const bookTemplate = document.querySelector('#bookTemplate');

const mobileNavToggle = document.getElementById('navbar-toggle');
const navigation = document.getElementById('navbar-sticky');
const navigationLinks = document.querySelectorAll('li > a');
const bookListLink = document.getElementById('list');
const activeNavigationLink = document.querySelector('.text-blue-700[aria-current="page"]');

const bookList = document.querySelector('#bookList');
const bookCreate = document.querySelector('#bookCreate');
const contactUs = document.querySelector('#contactUs');

export {
  bookCollection,
  bookForm,
  bookTitleInput,
  bookAuthorInput,
  bookTemplate,
  mobileNavToggle,
  navigation,
  navigationLinks,
  bookListLink,
  activeNavigationLink,
  bookList,
  bookCreate,
  contactUs,
};
