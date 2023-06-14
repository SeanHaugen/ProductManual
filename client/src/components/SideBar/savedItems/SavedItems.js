import React, {useState} from "react"

import { NavLink } from 'react-router-dom';



function SavedItems ({pin}) {

  const [isOpen, setIsOpen] = useState(false);

  //toggle munu functions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (

        <>
        <div className="saved-items ">
        <ul>
          {pin.map((item, index) => (
            <li key={item.id}>
              <NavLink to={`category/subcategory/${item}`} className="saved" key={index}>{item}</NavLink>
            </li>
          ))}
        </ul>
        </div>
        </>
    )
}

export default SavedItems;