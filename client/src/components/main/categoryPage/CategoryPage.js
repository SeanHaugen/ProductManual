
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './categoryPage.css';

function CategoryPage({ category, setSubCategory }) {
  console.log(category);


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

    console.log(products);

    
  
    return (
      <div className="category-page">
        <div className='product-list-container'>
          {products.map((product, index) => (
            <>
            {console.log(product.subcategory)}
            <h2>{product.category}</h2>
            <div key={index} className='product-list-items'>
              <NavLink to={`${product.subcategory}`} className='column is-mobile product box' onClick={() => setSubCategory(product.subcategory)}  >
                <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
                <br />
               {product.subcategory} 
              </NavLink>
            </div>
            </>
          ))}
          <br className='break'/>
        </div>
      </div>
    
    );
}

export default CategoryPage;