import React from "react"
// import ApiData from '../APIData';
import './frontPage.css';
import { NavLink } from 'react-router-dom';

import FrontPageSection from "./FrontPageSections/Section3";

function FrontPage({searchData, setItem}) {
  console.log(searchData);

    return (
      <>
        <p>This is the main page, search results will appear below</p>
        {searchData.map((product) => {
          return (
            <div>
             <NavLink to={`category/subcategory/${product.item_number}`} onClick={() => setItem(`${product.item_number}`)}>
                <ul key={product.item_number}>
                  {product.name} - {product.item_number}
                </ul>
              </NavLink>
          </div>

        )})}
    </>
    )
}

export default FrontPage;