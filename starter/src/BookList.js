import Book from "./Book";

const BookList = ({
  books,
  title,
  changeCategory,
  read,
  wantToRead,
  currentlyReading,
}) => {
  const getShelf = (book) => {
    var bookShelf;

    for (let i = 0; i < read.length; i++)
      if (book.title === read[i].title) bookShelf = "read";

    for (let i = 0; i < wantToRead.length; i++)
      if (book.title === wantToRead[i].title) bookShelf = "wantToRead";

    for (let i = 0; i < currentlyReading.length; i++)
      if (book.title === currentlyReading[i].title)
        bookShelf = "currentlyReading";

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

export default BookList;
