import React, {useState, useEffect} from "react";
import axios from "axios";
import './pricingTable.css';


function ItemPricingTable({item}) {

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

    const handlePrice = (price) => {
      return (price * 0.6).toFixed(2);
    }



    return (
        <>
 {products.map((product) => (
            <>
               <table className="table">
                <thead>
                  <tr>
                      <th scope="col" > </th>
                      <th scope="col" >QTY 1</th>
                      <th scope="col" >QTY 2-5</th>
                      <th scope="col" >QTY 6-11</th>
                      <th scope="col" >QTY 12-24</th>
                      <th scope="col" >QTY 25-50</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>Retail</th>
                    <td>{product.prc1}</td>
                    <td>{product.prc2}</td>
                    <td>{product.prc3}</td>
                    <td>{product.prc4}</td>
                    <td>{product.prc5}</td>
                  </tr>
                  <tr>
                    <th scope='row'>net</th>
                    <td>{handlePrice(product.prc1) }</td>
                    <td>{handlePrice(product.prc2)}</td>
                    <td>{handlePrice(product.prc3)}</td>
                    <td>{handlePrice(product.prc4)}</td>
                    <td>{handlePrice(product.prc5)}</td>
                  </tr>
                  <tr>
                    <th scope='row'>1st column Shift</th>
                    <td>{handlePrice(product.prc2)}</td>
                    <td>{handlePrice(product.prc3)}</td>
                    <td>{handlePrice(product.prc4)}</td>
                    <td>{handlePrice(product.prc5)}</td>
                    <td>{handlePrice(product.prc6)}</td>
                  </tr>
                  <tr>
                    <th scope='row'>2nd column Shift</th>
                    <td>{handlePrice(product.prc3)}</td>
                    <td>{handlePrice(product.prc4)}</td>
                    <td>{handlePrice(product.prc5)}</td>
                    <td>{handlePrice(product.prc6)}</td>
                    <td>{handlePrice(product.prc7)}</td>
                    {/* <td>{product.prc4}</td> */}
                  </tr>
                  <tr>
                    <th scope='row'>3rd column Shift</th>
                    <td>{handlePrice(product.prc4)}</td>
                    <td>{handlePrice(product.prc5)}</td>
                    <td>{handlePrice(product.prc6)}</td>
                    <td>{handlePrice(product.prc7)}</td>
                    <td>{handlePrice(product.prc8)}</td>
                    
                  </tr>
                  <tr>
                    <th scope='row'>4th column Shift</th>
                    <td>{handlePrice(product.prc5)}</td>
                    <td>{handlePrice(product.prc6)}</td>
                    <td>{handlePrice(product.prc7)}</td>
                    <td>{handlePrice(product.prc8)}</td>
                    <td>{handlePrice(product.prc9)}</td>
                    
                  
                  </tr>
                </tbody>

               </table>
               </>
        ))
        }
        </>
    )
};


export default ItemPricingTable;