import React from "react";
import { NavLink } from "react-router-dom";

function SubCategoryPage({ products, setItem }) {
  return (
    <>
      <div className="sub-cat-page">
        <div className="product-list">
          {products.map((product) => (
            <div className="product-list-items" key={product.item_number}>
              <NavLink
                to={`${product.item_number}`}
                className="column is-mobile product box"
                onClick={() => setItem(`${product.item_number}`)}
              >
                <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
                {product.name} - {product.item_number}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <br className="break" />
    </>
  );
}

export default SubCategoryPage;
