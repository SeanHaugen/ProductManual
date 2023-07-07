import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";

import Header from "./header/Header";
import CategoryPage from "./categoryPage/CategoryPage";
import SubCategoryPage from "./SubCategoryPage/SubCategoryPage";
import ItemPage from "./ItemPage/ItemPage";
import SearchDropdown from "./searchbar/searchDropdown/SearchDropdown";
import FrontPage from "./frontPage/FrontPage";
import SearchBar from "./searchbar/SearchBar";

function main({
  setSubCategory,
  products,
  category,
  item,
  setItem,
  searchData,
  setSearchData,
  productData,
  query,
  setQuery,
}) {
  //  console.log(searchData);

  return (
    <>
      <main className="main-container">
        <header>
          <Header
            setSearchData={setSearchData}
            searchData={searchData}
            setItem={setItem}
            setQuery={setQuery}
            query={query}
            products={products}
            category={category}
            item={item}
          />
        </header>

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route
              path="/:category"
              element={
                <CategoryPage
                  category={category}
                  setSubCategory={setSubCategory}
                />
              }
            />
            <Route
              path="/:category/:subCategory"
              element={
                <SubCategoryPage products={products} setItem={setItem} />
              }
            />

            <Route
              path="/search-term/:item_number"
              element={
                <ItemPage
                  searchData={searchData}
                  products={products}
                  item={item}
                  productData={productData}
                />
              }
            />
            <Route
              path="/:category/:subCategory/:item"
              element={
                <ItemPage
                  searchData={searchData}
                  products={products}
                  item={item}
                  productData={productData}
                />
              }
            />

            {/* <Route path='/:productSearch/:itemSearch'   /> */}
          </Routes>
        </div>
      </main>
    </>
  );
}

export default main;
