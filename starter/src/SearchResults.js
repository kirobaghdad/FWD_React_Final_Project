import Book from "./Book";

const SearchResults = ({ result, changeCategory }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {typeof result === Array &&
          result.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} changeCategory={changeCategory} />
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default SearchResults;
