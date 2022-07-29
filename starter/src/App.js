import "./App.css";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    return res;
  };

  const categorizeBooks = (books) => {
    setCurrentlyReading(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setWantToRead(books.filter((book) => book.shelf === "wantToRead"));
    setRead(books.filter((book) => book.shelf === "read"));
  };

  useEffect(() => {
    getBooks().then(function (res) {
      categorizeBooks(res);
    });
  }, []);

  const changeCategory = (book, newCategory) => {
    BooksAPI.update(book, newCategory);
    //Removing the book from the old category
    if (book.shelf === "currentlyReading") {
      setCurrentlyReading(currentlyReading.filter((b) => book.id !== b.id));
    } else if (book.shelf === "wantToRead") {
      setWantToRead(wantToRead.filter((b) => book.id !== b.id));
    } else {
      setRead(read.filter((b) => book.id !== b.id));
    }

    //Adding the book to the new category
    if (newCategory === "currentlyReading") {
      setCurrentlyReading([...currentlyReading, book]);
    } else if (newCategory === "wantToRead") {
      setWantToRead([...wantToRead, book]);
    } else {
      setRead([...read, book]);
    }
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BooksList
                title="Currently Reading"
                books={currentlyReading}
                changeCategory={changeCategory}
              />
              <BooksList
                title="Want to Read"
                books={wantToRead}
                changeCategory={changeCategory}
              />
              <BooksList
                title="Read"
                books={read}
                changeCategory={changeCategory}
              />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
