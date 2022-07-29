import Book from "./Book";

const BooksList = ({ books, title, changeCategory }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} changeCategory={changeCategory} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksList;
