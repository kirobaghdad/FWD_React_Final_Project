import "./App.css";
import { useState, useEffect } from "react";
import BooksList from "./BooksList";
import * as BooksAPI from "./BooksAPI";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./Search";

function App() {
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
    } else if (book.shelf === "read") {
      setRead(read.filter((b) => book.id !== b.id));
    }

    //Adding the book to the new category
    if (newCategory === "currentlyReading") {
      setCurrentlyReading([...currentlyReading, book]);
    } else if (newCategory === "wantToRead") {
      setWantToRead([...wantToRead, book]);
    } else if (newCategory === "read") {
      setRead([...read, book]);
    }
    book.shelf = newCategory;
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
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
              <Link to="/search">Add a Book!</Link>
            </div>
          </div>
        }
      />
      <Route
        path="search"
        element={<Search getBooks={getBooks} changeCategory={changeCategory} />}
      />
    </Routes>
  );
}
export default App;
