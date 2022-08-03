import Book from "./Book";

const BooksList = ({
  books,
  title,
  changeCategory,
  read,
  wantToRead,
  currentlyReading,
}) => {
  const getShelf = (book) => {
    var bookShelf;
    read.map((b) => {
      if (b.title === book.title) {
        bookShelf = "read";
      }
    });

    wantToRead.map((b) => {
      if (b.title === book.title) bookShelf = "wantToRead";
    });

    currentlyReading.map((b) => {
      if (b.title === book.title) bookShelf = "currentlyReading";
    });
    if (bookShelf) return bookShelf;
    else return "none";
  };
  return (
    <div className="bookshelf">
      {title && <h2 className="bookshelf-title">{title}</h2>}
      <div className="bookshelf-books">
        {books.length > 0 && (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeCategory={changeCategory}
                  shelf={
                    read || wantToRead || currentlyReading
                      ? getShelf(book)
                      : book.shelf
                  }
                />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default BooksList;
