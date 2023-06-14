import React, {useState, useEffect} from "react";
import axios from "axios";
import './relatedItems.css';

function RelatedItems({ item }) {
    const [relatedItems, setRelatedItems] = useState([]);
  
    useEffect(() => {
      const fetchRelatedItems = async () => {
        try {
          const response = await axios.get(`/items/itemSelect?keywords=${item}`);
          setRelatedItems(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchRelatedItems();
    }, [item]);
  
    return (
      <div className="related-items-sidebar">
        {relatedItems.map((relatedItem) => (
          <div key={relatedItem.id}>{relatedItem.name}</div>
        ))}
      </div>
    );
  }


export default RelatedItems;