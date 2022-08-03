import ShelfChanger from "./ShelfChanger";
import background from "./icons/download.jpeg";

const Book = ({ book, changeCategory, shelf }) => {
  // useEffect(() => {
  //   return () => {
  //     console.log("Kiro");
  //   };
  // }, []);

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
      <div className="book-authors">{book.author}</div>
    </div>
  );
};

export default Book;
