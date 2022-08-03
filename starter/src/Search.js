import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import BooksList from "./BooksList";

const Search = ({ read, currentlyReading, wantToRead, changeCategory }) => {
  const [result, setResult] = useState([]);

  const getSearchResult = async (search) => {
    const res = await BooksAPI.search(search, 20);
    return res;
  };

  const searchBooks = (search) => {
    getSearchResult(search).then((res) => {
      setResult(res);
      console.log(res);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
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
          <BooksList
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

/*
result.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} changeCategory={changeCategory} />
                </li>
              );
            })
            */
