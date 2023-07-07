import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SearchedItems({ currentItems, setItem }) {
  return (
    <div className="product-list-container">
      {currentItems &&
        currentItems.map((product) => {
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
    </div>
  );
}

export default SearchedItems;
