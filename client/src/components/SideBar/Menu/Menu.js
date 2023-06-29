import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./menu.css";
import {
  fetchCategoryData,
  fetchSubCategoryData,
} from "../../custom_hooks/apiCalls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Menu({ setSelectedRoute, setCategory, setSubCategory }) {
  const element = <FontAwesomeIcon icon={faChevronDown} />;

  // const [isOpen, setIsOpen] = useState(true);
  const [menuData, setMenuData] = useState([]);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuData, setSubMenuData] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  //custom hooks for api calls to fetch category and subCategory data
  fetchCategoryData(setMenuData);
  fetchSubCategoryData(setSubMenuData, selectedCategory);

  const toggleSubMenu = (category) => {
    if (subMenu.includes(category)) {
      setSubMenu(subMenu.filter((item) => item !== category));
      setSubMenuOpen(false);
    } else {
      setSubMenu([category]);
      setSubMenuOpen(true);
    }
  };

  //Should cause the submenu to only display a certain number of items
  const manipulateSubMenu = (data) => {
    if (data.length > 7) {
      return [...data.slice(0, 7), <em>See more results</em>];
    } else {
      return data;
    }
  };

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
    setSubMenuOpen(true);
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  const handleSubCategoryClick = (subCat) => {
    setSubCategory(subCat);
  };

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        {/* <button className="button"onClick={toggleMenu} >
                <span>Products</span>
                <span className="icon is-small"    >
                    {element}
                </span>
            </button> */}
        <div className="list-menu">
          <ul className="list">
            {menuData.map((cat) => (
              <li key={cat} onClick={() => handleCategoryHover(cat)}>
                <button onClick={() => toggleSubMenu(cat)}>{element}</button>
                <NavLink
                  to={`${cat}`}
                  onClick={() => {
                    setSelectedRoute(`${cat}`);
                    handleCategoryClick(`${cat}`);
                  }}
                >
                  {cat}
                </NavLink>

                {subMenuOpen && subMenu.includes(cat) && (
                  <div className="submenu">
                    <div>
                      <ul>
                        {manipulateSubMenu(subMenuData).map((subCat) => (
                          <li key={subCat} className="submenu-list">
                            <NavLink
                              to={`${cat}/${subCat}`}
                              onClick={() => {
                                setSelectedRoute(`${cat}/${subCat}`);
                                handleSubCategoryClick(`${subCat}`);
                              }}
                            >
                              {" "}
                              {subCat}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;

// return (
//     <div className="dropdown is-active">
//         <div className="dropdown-trigger">
//             <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={toggleMenu} >
//                 <span>Products</span>
//                 <span className="icon is-small" >
//                     <i className="fas fa-angle-down" aria-hidden="true" ></i>
//                 </span>
//             </button>
//         <div className="dropdown-menu" id="dropdown-menu" role="menu" onMouseLeave={handleMouseLeave} >
//             {isOpen && (
//                 <ul className="dropdown-content" >
//                     {menuData.map((cat, index ) => (
//                     <>

//                     <li key={index} onMouseEnter={() => handleCategoryHover(cat)}    >

//                         <p className="dropdown-item " onMouseEnter={() => toggleSubMenu(cat)} >

//                         <NavLink to={`${cat}`} className="menu-link " onClick={() => { setSelectedRoute(`${cat}`); handleCategoryClick(`${cat}`) }}>{cat}</NavLink>

//                         </p>
//                         {subMenuOpen && (subMenu.includes(cat) && (
//                             <div className="submenu dropdown is-active is-hoverable">
//                                 <div className="dropdown-trigger">
//                                 <span className="icon is-small">
//                                     <i className="fas fa-angle-down" aria-hidden="true"></i>
//                                 </span>
//                                 </div>

//                                 <div className="dropdown-menu" id="dropdown-menu" role="menu">
//                                 <ul className="dropdown-content submenu-content">
//                                     {manipulateSubMenu(subMenuData).map((subCat, index) => (
//                                     <li key={index} className="dropdown-item">
//                                         <NavLink to={`${cat}/${subCat}`} className="menu-link" onClick={() => {setSelectedRoute(`${cat}/${subCat}`); handleSubCategoryClick(`${subCat}`)}}>{subCat}</NavLink>
//                                     </li>
//                                     ))}
//                                 </ul>
//                                 </div>
//                             </div>
//                         ))}

//                     </li>
//                     </>
//                     ))}
//                 </ul>)
//             }
//         </div>
//         </div>
//     </div>
//     )
