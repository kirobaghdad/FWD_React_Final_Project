import "./App.css";
import { useState, useEffect } from "react";
import BookList from "./BookList";
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

  // This function fetches the books from the server and categorize them according to their shelves
  const categorizeBooks = (books) => {
    setCurrentlyReading(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setWantToRead(books.filter((book) => book.shelf === "wantToRead"));
    setRead(books.filter((book) => book.shelf === "read"));
  };

  useEffect(() => {
    getBooks()
      .then(function (res) {
        categorizeBooks(res);
      })
      .catch(() => {
        categorizeBooks([]);
      });
  }, []);

  //This function changes the category of the given book to the newCategory
  const changeCategory = (book, shelf, newCategory) => {
    //Removing the book from the old category in the frontend
    if (shelf === "currentlyReading") {
      setCurrentlyReading(currentlyReading.filter((b) => book.id !== b.id));
    } else if (shelf === "wantToRead") {
      setWantToRead(wantToRead.filter((b) => book.id !== b.id));
    } else if (shelf === "read") {
      setRead(read.filter((b) => book.id !== b.id));
    }

    //Adding the book to the new category in the frontend
    if (newCategory === "currentlyReading") {
      setCurrentlyReading([...currentlyReading, book]);
    } else if (newCategory === "wantToRead") {
      setWantToRead([...wantToRead, book]);
    } else if (newCategory === "read") {
      setRead([...read, book]);
    }
    if (book.shelf !== "none") book.shelf = newCategory;

    //Updating the backend
    BooksAPI.update(book, newCategory);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          /*Book Lists page*/
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  /*Currently Reading book list*/
                  <BookList
                    title="Currently Reading"
                    books={currentlyReading}
                    changeCategory={changeCategory}
                  />
                }
                {
                  /*Want to Read book list*/
                  <BookList
                    title="Want to Read"
                    books={wantToRead}
                    changeCategory={changeCategory}
                  />
                }
                {
                  /*Read book list*/
                  <BookList
                    title="Read"
                    books={read}
                    changeCategory={changeCategory}
                  />
                }
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
        element={
          /*Search books page*/
          <Search
            className="search"
            currentlyReading={currentlyReading}
            read={read}
            wantToRead={wantToRead}
            changeCategory={changeCategory}
          />
        }
      />
    </Routes>
  );
}
export default App;
