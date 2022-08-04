import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";

const Search = ({ read, currentlyReading, wantToRead, changeCategory }) => {
  const [result, setResult] = useState([]);

  const getSearchResult = async (search) => {
    const res = await BooksAPI.search(search, 20);
    return res;
  };

  const searchBooks = (search) => {
    getSearchResult(search)
      .then((res) => {
        setResult(res);
      })
      .catch(() => {
        setResult([]);
      });
  };

  useEffect(() => {
    document.getElementById("search-books-input").focus();
  });
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            id="search-books-input"
            type="text"
            onChange={(e) => {
              searchBooks(e.target.value);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>

      <div className="search-books-results">
        {Array.isArray(result) && (
          <BookList
            books={result}
            changeCategory={changeCategory}
            read={read}
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
