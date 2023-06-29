import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./header/Header";
import CategoryPage from "./categoryPage/CategoryPage";
import SubCategoryPage from "./SubCategoryPage/SubCategoryPage";
import ItemPage from "./ItemPage/ItemPage";
import SearchPage from "./searchPage/SearchPage";
import FrontPage from "./frontPage/FrontPage";

function main({
  setSubCategory,
  products,
  category,
  setItem,
  searchData,
  item,
  productData,
}) {
  //  console.log(searchData);

  return (
    <>
      <main className="main-container">
        <header>
          <Header />
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
              path="/:search-term"
              element={
                <SearchPage
                  searchData={searchData}
                  category={category}
                  products={products}
                  setItem={setItem}
                />
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
