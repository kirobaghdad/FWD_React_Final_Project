import { Link } from "react-router-dom";
import InputField from "./InputField";
import SearchResults from "./SearchResults";
import { useState } from "react";
const Search = ({ getBooks, changeCategory }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <InputField
          search={search}
          setSearch={setSearch}
          setResult={setResult}
        />
      </div>
      <SearchResults result={result} changeCategory={changeCategory} />
    </div>
  );
};

export default Search;
