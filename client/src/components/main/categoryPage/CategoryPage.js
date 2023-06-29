import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchSubCategoryData } from "../../custom_hooks/apiCalls";
import "./categoryPage.css";

function CategoryPage({ category, setSubCategory }) {
  const [productsCategory, setProductsCategory] = useState([]);

  fetchSubCategoryData(setProductsCategory, category);

  return (
    <div className="category-page">
      <div className="product-list-container">
        <h2>{category}</h2>
        {productsCategory.map((product) => (
          <div key={product}>
            {/* {console.log(product)} */}

            <div className="product-list-items">
              <NavLink
                to={`${product}`}
                className="column is-mobile product box"
                onClick={() => setSubCategory(product)}
              >
                <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
                <br />
                {product}
              </NavLink>
            </div>
          </div>
        ))}
        <br className="break" />
      </div>
    </div>
  );
}

export default CategoryPage;

//
//
//
///
//
///

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`/products/categorySelect?category=${category}`);
//       setProducts(response.data);
//     } catch (err) {
//       setError('Internal Server Error');
//       console.error(err);
//     }
//   };

//   fetchProducts();
// }, [category]);
