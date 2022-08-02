import * as BooksAPI from "./BooksAPI";

const InputField = ({ search, setSearch, setResult }) => {
  const getSearchResult = async () => {
    console.log(search);
    const res = await BooksAPI.search(search, 10);
    console.log(res);
    return res;
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        value={search}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
          getSearchResult().then(function (res) {
            console.log(res);
            setResult(res);
          });
          console.log(e.target.value);
        }}
        placeholder="Search by title, author, or ISBN"
      />
    </div>
  );
};

export default InputField;
