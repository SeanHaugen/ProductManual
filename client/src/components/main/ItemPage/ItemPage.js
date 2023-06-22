import React, {useState, useEffect} from "react";
import axios from "axios";
import ItemPricingTable from './PricingTable/ItemPricingTable';
import SelfPromo from "./selfPromo/SelfPromo";
import ColorBox from "./colorGrid/ColorBox";
import './itemPg.css';
import RelatedItems from "./relatedItems/RelatedItems";
import FlatRateShipping from "./flatRate/FlatRateShip";


import FedexTool from "./fedexTool/FedexTool";

function ItemPage({setPin, item, searchData}) {
    
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

    // console.log(products);

    const handlePin = () => {
      setPin((prevPin) => [...prevPin, item]);
    };
  
    return (
      <>
      <div className="item-page">
      <div className='box content'>        
        <div className='product-list'>
          {products.map((product) => (
            <div key={product.item_number} >
              <h2>{product.category}</h2>
              <div className='product-list-items'>
                <div>
                <figure>
                    <img className="placeholder" src="https://fakeimg.pl/400x300" alt="placeholder blank"></img>
                </figure>
                </div>
                <h1>{product.name}</h1>
                <h2>{product.item_number}</h2> 
                <p>{product.description}</p> 
                <p>{product.kit_includes}</p>
                <p>Lead time: {product.lead_times} business days</p>
                <ItemPricingTable item={item} />

              </div>
              <button onClick={handlePin}>Save to Favs</button>
              <SelfPromo product={product} />
              <ColorBox product={product} />
              <RelatedItems product={product} searchData={searchData} item={item}/>
              <FlatRateShipping item={item} />
              <FedexTool product={product} />

            </div>
          ))}

          
          
        </div>
      </div>
      <br className='break'/>
      </div>
      </>
    );
}

export default ItemPage;