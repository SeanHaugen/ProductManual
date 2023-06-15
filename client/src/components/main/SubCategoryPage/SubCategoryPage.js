
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function SubCategoryPage({subCategory, setItem}) {
    console.log(subCategory);

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/products/itemSelect?category=${subCategory}`);
          setProducts(response.data);
        } catch (err) {
          setError('Internal Server Error');
          console.error(err);
        }
      };
  
      fetchProducts();
    }, [subCategory]);


    if (error) {
      return <div>{error}</div>;
    }

    console.log(products);

    
  
    return (
      <>

      <div className='sub-cat-page'>        
        <div className='product-list'>
          {products.map((product) => (
            <>
            {/* <h2>{product.category}</h2> */}
            <div key={product.item_number} className='product-list-items'>
              <NavLink to={`${product.item_number}`} className='column is-mobile product box' onClick={() => setItem(`${product.item_number}`)} >
              <img src="https://fakeimg.pl/150x175" alt="placeholder"></img>
              {product.name} - {product.item_number} 
              </NavLink>
            </div>
            </>
          ))}
        </div>
      </div>
      <br className='break'/>
      </>
    );
}

export default SubCategoryPage;