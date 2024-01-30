class Book {
  // Initialize book details
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  constructor(bookList) {
    // Create an empty array to store books or use the provided list
    this.bookList = bookList || [];
  }

  addBook(newBook) {
    // Utilize the push method to add a new book to the library
    this.bookList.push(newBook);
  }

  removeBook(bookToRemove) {
    // Use indexOf to find the index of the book to be removed and splice() to eliminate it
    for (let book of this.bookList) {
      let index = this.bookList.indexOf(book);
      if (book === bookToRemove) {
        this.bookList.splice(index, 1);
      }
    }
  }

  displayAllBooks() {
    let indexCounter = 1;
    // Display details of all books in the library
    for (let book of this.bookList) {
      console.log(`${indexCounter}) Title: ${book.title} | Author: ${book.author} | ISBN: ${book.ISBN}`);
      ++indexCounter;
    }
  }
}

// Create new instances of books
const newBook1 = new Book("MDMA", "ltc", "btc");
const newBook2 = new Book("botanica", "gay", "p2p");

// Create a new library
const library = new Library();

// Add the new books to the library
library.addBook(newBook1);
library.addBook(newBook2);

// Remove one of the books
library.removeBook(newBook1);

// Display all books in the library
library.displayAllBooks();
