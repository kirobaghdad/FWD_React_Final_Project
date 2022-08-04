import ShelfChanger from "./ShelfChanger";
import background from "./icons/image-not-found.png";

const Book = ({ book, changeCategory, shelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : background
            })`,
          }}
        ></div>
        <ShelfChanger
          book={book}
          changeCategory={changeCategory}
          shelf={shelf}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div>
        {book.authors
          ? book.authors.map((author, index) => (
              <span key={author} className="book-authors">
                {author}
                {index + 1 < book.authors.length ? ", " : ""}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Book;
