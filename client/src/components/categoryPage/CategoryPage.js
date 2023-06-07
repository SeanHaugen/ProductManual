
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './categoryPage.css';

function CategoryPage({ category }) {
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
      <>
      
        <section className='filters'>
          <h2></h2>
          <div className='filter box'>
            <ul>
              <li>useful filter section</li>
            </ul>
          </div>
        </section>
      <main className='main'>        
        <div className='product-list'>
          {products.map((product, index) => (
            <>
            {/* <h2>{product.category}</h2> */}
            <div key={index} className='product-list-items'>
              <NavLink to={`${product}`}  className='column is-mobile product box' >
                <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
                <br />
               {product.subcategory} 
              </NavLink>
            </div>
            </>
          ))}
        </div>
      </main>
      <br className='break'/>
      </>
    );
}

export default CategoryPage;