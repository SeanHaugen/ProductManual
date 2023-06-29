import React, { useState, useEffect } from "react";
import { fetchSearchData } from "../../custom_hooks/apiCalls";
import axios from "axios";
import Fuse from "fuse.js";

import { NavLink, useNavigate } from "react-router-dom";
import { useHistory } from "react-router";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar({ setSearchData }) {
  const navigate = useNavigate();
  // const element = <FontAwesomeIcon icon={faSearch} />
  // const [searchData, setSearchData] = useState([]);
  const [query, setQuery] = useState("");
  // const [results, setResults] = useState([]);

  fetchSearchData(setSearchData, query);

  const handleOnSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`search-term`);
  };

  // console.log(searchData);
  // console.log(query);

  return (
    <>
      <div>
        <form>
          <section className="search-section">
            <input
              type="text"
              className="searchbar input is-medium is-rounded"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className="button search-button" onClick={handleClick}>
              Search
            </button>
          </section>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
