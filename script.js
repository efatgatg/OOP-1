class Book {
  // initial data
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  constructor(list) {
    // create empty arr
    this.list = list || [];
  }
  addBook(newBook) {
    // uses push method for adding new book
    this.list.push(newBook);
  }
  removeBook(delBook) {
    // using indexOf to find the index of the book we want to remove, and splice() to remove it
    for(let book of this.list) {
      let index = this.list.indexOf(book);
      if(book === delBook) {
        this.list.splice(index, 1);
      }
    }
  }
  displayAllBooks() {
    let i = 1;
    // show all books
    for(let book of this.list) {
      console.log(`${i}) Title: ${book.title} | Author: ${book.author} | ISNB: ${book.ISBN}`);
      ++i;
    }
  }
}

// create new books
const newBook1 = new Book("Da", "DADA", "1332423");
const newBook2 = new Book("dadada", "dada", "python");
// create new library
const lib = new Library();
// add 1 and 2 new books
lib.addBook(newBook1);
lib.addBook(newBook2);
// remove one of them
lib.removeBook(newBook1)
// display all
lib.displayAllBooks();


