import React, {useState, useEffect} from "react";
import axios from "axios";

import ItemInfoTab1 from "./ItamPageTabs/Tab1";
import ItemInfoTab2 from "./ItamPageTabs/Tab2";
import ItemInfoTab3 from "./ItamPageTabs/Tab3";
import ItemPricingTable from './PricingTable/ItemPricingTable';

function ItemPage({setPin, item}) {
    
    console.log(item);

    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/category/subcategory?item_number=${item}`);
          setProducts(response.data);
        } catch (err) {
          setError('Internal Server Error');
          console.error(err);
        }
      };
  
      fetchProducts();
    }, []);


    if (error) {
      return <div>{error}</div>;
    }

    console.log(products);

    const handlePin = () => {
      setPin((prevPin) => [...prevPin, item]);
    };
  
    return (
      <>
      <div className="item-page">
        <section className='filters'>
          <h2></h2>
          <div className='filter box'>
            <ul>
              <li>useful filter section</li>
            </ul>
          </div>
        </section>
      <div className='box content'>        
        <div className='product-list'>
          {products.map((product) => (
            <>
            {/* <h2>{product.category}</h2> */}
            <div key={product.item_number} className='product-list-items'>
              <div>
               <figure>
                  <img className="placeholder" src="https://fakeimg.pl/400x300"></img>
               </figure>
               </div>
               <h1>{product.name}</h1>
               <h2>{product.item_number}</h2> 
               <p>{product.description}</p> 
               <ItemPricingTable item={item} />
               
              
            </div>
            
                      <ItemInfoTab1 />
                      <ItemInfoTab2 />
                      <ItemInfoTab3 />
            <button onClick={handlePin}>Save</button>
            </>
          ))}

          
          
        </div>
      </div>
      <br className='break'/>
      </div>
      </>
    );
}

export default ItemPage;