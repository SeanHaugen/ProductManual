import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchItemData } from "./components/custom_hooks/apiCalls";

import Main from "./components/main/MainPage";
import SideBar from "./components/SideBar/sideBar";

import { fetchProductsData } from "./components/custom_hooks/apiCalls";

function App() {
  //Routing state variables
  const [selectedRoute, setSelectedRoute] = useState("");
  console.log(selectedRoute);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [productData, setProductData] = useState([]);

  fetchProductsData(setProducts, subCategory);
  fetchItemData(setProductData, item);

  return (
    <Router>
      <div className="app">
        <SideBar
          className="side-bar-container"
          setSelectedRoute={setSelectedRoute}
          setCategory={setCategory}
          setSubCategory={setSubCategory}
          setSearchData={setSearchData}
          searchData={searchData}
          item={item}
          setItem={setItem}
          productData={productData}
        />

        <Main
          className="main-page-container"
          products={products}
          setSubCategory={setSubCategory}
          category={category}
          searchData={searchData}
          setItem={setItem}
          item={item}
          productData={productData}
        />
      </div>
    </Router>
  );
}

export default App;
