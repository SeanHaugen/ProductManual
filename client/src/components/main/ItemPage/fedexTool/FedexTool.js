import React, { useEffect, useState } from 'react';
import axios from 'axios';



function FedexTool ({product}) {


    // const [weight, setWeight] = useState('');
    // const [dimension, setDimension] = useState('');

    // let numbersOnly = product.package_size.match(/\d+/g).map(Number);
    // setDimension(numbersOnly);
   

    // const fetchData = async (weight, dimensions) => {
    //     const input = { weight, dimensions };
    //     try {
    //       const response = await axios.post(
    //         'https://apis-sandbox.fedex.com/rate/v1/rates/quotes',
    //         input,
    //         {
    //           headers: {
    //             'content-type': 'application/json',
    //             'X-locale': 'en_US',
    //             Authorization: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsN2U4ZmM1NjBmMjc2ODRmYjhiOTQ3YWM5MDJjNWRkMDgxIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE5LUp1bi0yMDIzIDEzOjQ5OjU3IEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE2ODcyMDQxOTcsImp0aSI6IjllZjc5YzJiLTkwNjItNDcxOS1iOTdiLTdhNjQ4NjQyMTM4ZiJ9.H8S4P1Tg9BRx611afPp58fsPZCXugiuxQhcszoINt0tLSLxOJdgbgqGK30aR4yKx4ZZyuOVfAUOdTGvvepOQWeKPwpG0oFAuYlSOU7H-17BuDj8PE4CauDIW38ZZYAI_L_URiR-effTaYW0yAV2RkVvzSEg_nM_s6CJClrQUX6RfRDHGHHe3xjrsuK2BW3xwQqP1KbxZcFffcKysn4pHzwG4jgFuK_sTgQcP7dXqwIj1mBqSNG8TA0PkwsWMb4Eu73sH9dJWoPcdPxXDfP-y1-kn5jFFP3xA2hHRERPhttKH5fA6AjycLpbfH6SfIrIUhIYA8fU_af79FbS_8cwx4Un_RgOuqYAQEP2v1IcB5P28OFjnOQ5xdlxGf_LtbKrwIE5zeufq4pvbl7gszigihe9W1p2-wV4TFWPL8KaKL-LDoIMotS88md5lYEbahrUh8WmtQNokiGGcmf6ZrNA38kxvNC3boGl8oWcWPbaJEJ6wC7IGWBpjSHHH1YOxdc_LLaMiMFjBowbJqAy0tKuaXmiEwq6ssIKYsBdiw9vkkbF0A_bujKymCHqOWZ1Rz03qKfXwtpuMg10aG9AMkvh04UcCm_9MrppCSaNe_aEs53d-fZMS63vVti96ahB3RxVN_EqhQtCZBoDJRNdHt5xk4np0kfbYRMYC5iS5KTMLe2c"
    //           },
    //         }
    //       );
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    //   useEffect(() => {
    //     fetchData(weight, dimension);
    //   }, []);
    
    
    
    
    


    return (
        <>
        <div className='box'>
            <h1>Fedex Toolbox</h1>
            <ul>
                <li>{product.package_size}</li>
                <li>{product.package_weight}</li>
            </ul>
            <h3>Fedex Quote for Qty 1</h3>
                <label>Zip Code</label>
                <input type="number"></input>
            
        </div>
        </>
    )
}

export default FedexTool