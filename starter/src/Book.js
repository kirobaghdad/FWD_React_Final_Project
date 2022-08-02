import ShelfChanger from "./ShelfChanger";
const Book = ({ book, changeCategory }) => {
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
            width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <ShelfChanger book={book} changeCategory={changeCategory} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  );
};

export default Book;
