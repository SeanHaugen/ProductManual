import React, {useState, useEffect} from "react"
import axios from "axios";
import './sidebar.css';
import Menu from "../Menu/Menu";

// import Bookmark from 'react-bookmark';
import { NavLink } from 'react-router-dom';

function SideBar ({pin, setCategory, setSelectedRoute, setSubCategory}) {


    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <div className="sidebar">
        <button onClick={handleSidebarClick}>
          <i className="fa fa-bars"></i>
        </button>
        <Menu className="navbar-menu" setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} /> 
        <ul>
          {pin.map((item, index) => (
            <li key={item.id}>
              <NavLink to={`category/subcategory/${item}`} className="subtitle" key={index}>{item}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
    // return (
    //     <>
    //     <div className="sidebar ">
    //         <div className="menu"
    //         >
    //         <h1>Saved Links</h1>
    //             <div className="content">
                    
    //                 <hr />
    //                     {pin.map((item, index) => (
    //                         <>
    //                         <div className="links" >
    //                             <NavLink to={`category/subcategory/${item}`} className="subtitle" key={index}>{item}</NavLink>
    //                         </div>
    //                         </>
                        
    //                         ))
    //                     }
    //             </div>
            
    //         </div>
    //     </div>
    //     </>
    // )
}

export default SideBar;