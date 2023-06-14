import React from "react";


function SelfPromo({product}) {

    console.log(product.prc5);

    const selfPromoPrice = () => {
        return ((product.prc5 * 0.6) * 0.6).toFixed(2); 
        }

    return (
        <>
        <div>
            Self Promo Price: {selfPromoPrice()}
        </div>
        
        </>
    )
}


export default SelfPromo;