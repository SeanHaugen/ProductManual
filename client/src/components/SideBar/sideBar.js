import React from "react";
import "./sidebar.css";
import Menu from "./Menu/Menu";
import SearchBar from "./searchbar/SearchBar";
import SavedItems from "./savedItems/SavedItems";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function SideBar({
  setCategory,
  setSelectedRoute,
  setSubCategory,
  setSearchData,
  searchData,
  setItem,
  item,
  productData,
}) {
  const element = <FontAwesomeIcon icon={faHome} />;

  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const handleSidebarClick = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="sidebar">
      <nav
        className="navbar navbar-end"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu navigation">
          <NavLink
            to="/"
            className="home"
            onClick={() => setSelectedRoute("/")}
          >
            {element}
          </NavLink>
          {/* <Menu className="navbar-menu" setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} />    */}
        </div>
      </nav>
      <div className="searchbar-container">
        <SearchBar
          className="searchbar"
          setSearchData={setSearchData}
          searchData={searchData}
          setItem={setItem}
        />
        <Menu
          className="navbar-menu"
          setSelectedRoute={setSelectedRoute}
          setCategory={setCategory}
          setSubCategory={setSubCategory}
        />
      </div>
      <SavedItems
        item={item}
        productData={productData}
        className="saved-items"
      />
    </div>
  );
}

export default SideBar;
