import React, { useState } from "react";
import { fetchItemData } from "../../custom_hooks/apiCalls";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function SavedItems({ productData }) {
  const element = <FontAwesomeIcon icon={faChevronDown} />;
  const deleteElement = <FontAwesomeIcon icon={faDeleteLeft} />;

  console.log(productData);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const removePin = (itemId) => {
    const pinIndex = productData.findIndex((item) => item.id === itemId);
    // if (pinIndex !== -1) {
    //   const updatedPin = [...pin];
    //   updatedPin.splice(pinIndex, 1);
    //   setPin(updatedPin);
    // }
  };

  return (
    <>
      <div className="saved-items ">
        <button onClick={toggleMenu} className="button toggle-saved-items">
          {element}Saved Items
        </button>
        <div>
          {isOpen &&
            productData.map((item) => (
              <ul>
                <li key={item.item_number}>
                  <NavLink
                    to={`search-term/${item.item_number}`}
                    className="saved"
                  >
                    {item.item_number}
                  </NavLink>
                  <button onClick={() => removePin(item.item_number)}>
                    {deleteElement}
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}

export default SavedItems;
