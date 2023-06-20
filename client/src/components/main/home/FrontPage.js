import React, {useState} from "react"
// import ApiData from '../APIData';
import './frontPage.css';
import { NavLink } from 'react-router-dom';


// import FrontPageSection from "./FrontPageSections/Section3";

function FrontPage({searchData, setItem}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);



    return (
      <>
        <h1>Digital Catalog</h1>
        <p></p>
        <div className='product-list-container'>
        {searchData.map((product) => {
          return (
            <div className='product-list-items' key={product.item_number}>
             <NavLink  className='column is-mobile product box' to={`category/subcategory/${product.item_number}`} onClick={() => setItem(`${product.item_number}`)}>
                <ul >
                  {product.name} - {product.item_number}
                </ul>
              </NavLink>
          </div>
        )})}
        <div        
          current={currentPage}
          total={totalPages}
          onChange={setCurrentPage}
        />
        
        </div>
    </>
    )
}

export default FrontPage;