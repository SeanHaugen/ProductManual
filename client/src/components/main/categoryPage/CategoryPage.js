
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './categoryPage.css';

function CategoryPage({ category, setSubCategory }) {



    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/products/categorySelect?category=${category}`);
          setProducts(response.data);
        } catch (err) {
          setError('Internal Server Error');
          console.error(err);
        }
      };
  
      fetchProducts();
    }, [category]);


    if (error) {
      return <div>{error}</div>;
    }



    
  
    return (
      <div className="category-page">
        <div className='product-list-container'>
          {products.map((product) => (
            <div key={product.subcategory}>
            {/* {console.log(product)} */}
            <h2>{product.category}</h2>
            <div className='product-list-items'>
              <NavLink to={`${product.subcategory}`} className='column is-mobile product box' onClick={() => setSubCategory(product.subcategory)}  >
                <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
                <br />
               {product.subcategory} 
              </NavLink>
            </div>
            </div>
          ))}
          <br className='break'/>
        </div>
      </div>
    
    );
}

export default CategoryPage;