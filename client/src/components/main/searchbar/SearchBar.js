import React, { useState, useEffect } from "react";
import { fetchSearchData } from "../../custom_hooks/apiCalls";
import ReactPaginate from "react-paginate";
import SearchPage from "./searchDropdown/SearchDropdown";

import { NavLink, Routes, Route, useNavigate } from "react-router-dom";

function SearchBar({
  setSearchData,
  query,
  setQuery,
  searchData,
  setItem,
  itemsPerPage,
  products,
  category,
  item,
}) {
  const navigate = useNavigate();

  fetchSearchData(setSearchData, query);

  const handleOnSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`search-term`);
  };

  return (
    <>
      <div>
        <form>
          <section className="search-section">
            <input
              type="text"
              className="searchbar input is-medium"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className="button search-button" onClick={handleClick}>
              Search
            </button>
          </section>
        </form>
        <Routes>
          <Route
            path="/:search-term"
            element={
              <SearchPage
                searchData={searchData}
                category={category}
                products={products}
                setItem={setItem}
                item={item}
                itemsPerPage={15}
                query={query}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default SearchBar;
