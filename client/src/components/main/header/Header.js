import React, { useState, useEffect } from "react";

import "./header.css";
import logo from "../../../data/img/logo1.png";
import SearchBar from "../searchbar/SearchBar";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'

function Header({
  searchData,
  setSearchData,
  setQuery,
  query,
  setItem,
  products,
  category,
  item,
}) {
  // const element = <FontAwesomeIcon icon={faHome} />

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollStarted, setScrollStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollStarted) {
        setScrollPos(window.pageYOffset);
      } else {
        const hrElement = document.querySelector(".break");
        const hrTop = hrElement.offsetTop + hrElement.offsetHeight;
        if (window.pageYOffset > hrTop) {
          setScrollStarted(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollStarted]);

  return (
    <>
      {/* className={scrollPos > 5 ? 'header-scrolled' : ''} */}
      <header>
        <section className="hero  is-small level ">
          <div className="hero-body">
            <img className="header-image" src={logo} alt="showdown logo1" />
          </div>
        </section>
      </header>
      <SearchBar
        className="searchbar"
        setSearchData={setSearchData}
        searchData={searchData}
        setItem={setItem}
        setQuery={setQuery}
        query={query}
        products={products}
        category={category}
        item={item}
      />

      <div className="breadcrumb" aria-label="breadcrumbs"></div>
      <br className="break" />
    </>
  );
}

export default Header;
