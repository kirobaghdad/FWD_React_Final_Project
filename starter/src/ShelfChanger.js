const ShelfChanger = ({ book, changeCategory, shelf }) => {
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
            changeCategory(book, shelf, e.target.value);
        }}
        defaultValue={shelf}
        id="drop"
      >
        <option disabled>Move to...</option>

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
