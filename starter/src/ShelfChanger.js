const ShelfChanger = ({ book, changeCategory }) => {
  console.log(book.shelf);
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
          console.log(e.target.value);
          changeCategory(book, e.target.value);
        }}
        defaultValue={"none"}
      >
        <option value="none" disabled>
          Move to...
        </option>

        {options.map((option) => {
          if (option.value !== book.shelf)
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
