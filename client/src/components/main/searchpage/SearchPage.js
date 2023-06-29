import React, { useState } from "react";
// import ApiData from '../APIData';

import { NavLink, useNavigate } from "react-router-dom";

// import FrontPageSection from "./FrontPageSections/Section3";

function SearchPage({ searchData, setItem }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  // const handleClick = (itemNumber) => {
  //   navigate(`/search-term/${itemNumber}`);
  // };

  console.log(searchData);

  return (
    <>
      <p></p>
      <div className="product-list-container">
        {searchData.map((product) => {
          return (
            <div className="product-list-items" key={product.item_number}>
              <NavLink
                to={product.item_number}
                className="column is-mobile product box"
                onClick={() => setItem(`${product.item_number}`)}
              >
                <ul>
                  <li>
                    {product.name} - {product.item_number}
                  </li>
                </ul>
              </NavLink>
            </div>
          );
        })}
        <div
          current={currentPage}
          total={totalPages}
          onChange={setCurrentPage}
        />
      </div>
    </>
  );
}

export default SearchPage;
