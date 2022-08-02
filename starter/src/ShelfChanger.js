const ShelfChanger = ({ book, changeCategory }) => {
  const options = [
    {
      value: "read",
      text: "Read",
    },
    {
      value: "wantToRead",
      text: "Want to Read",
    },
    {
      value: "currentlyReading",
      text: "Currently Reading",
    },
    {
      value: "none",
      text: "None",
    },
  ];

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => {
          if (e.target.value !== book.shelf)
            changeCategory(book, e.target.value);
        }}
        defaultValue={book.shelf}
        id="drop"
      >
        <option value="none" disabled>
          Move to...
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ShelfChanger;
