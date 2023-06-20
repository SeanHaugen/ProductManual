import React, {useState} from "react"

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function SavedItems ({pin}) {

  const element = <FontAwesomeIcon icon={faChevronDown} />

  const [isOpen, setIsOpen] = useState(false);

  //toggle munu functions
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    return (

        <>
        <div className="saved-items ">
          
          <button onClick={toggleMenu} className="button toggle-saved-items">{element}Saved Items</button>
        <ul>
          {isOpen && (pin.map((item, index) => (
            <li key={item.id}>
              <NavLink to={`category/subcategory/${item}`} className="saved" key={index}>{item}</NavLink>
            </li>
          )))}
        </ul>
        </div>
        </>
    )
}

export default SavedItems;