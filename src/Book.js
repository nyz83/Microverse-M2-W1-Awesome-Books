/** @format */

class Book {
  constructor(title, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
  }
}

export default Book;
