import React, {useState, useEffect} from "react"
import axios from "axios";
import './sidebar.css';
import Menu from "./Menu/Menu";
import SearchBar from "./searchbar/SearchBar";
import SavedItems from "./savedItems/SavedItems";

import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'



function SideBar ({pin, setCategory, setSelectedRoute, setSubCategory, setSearchData}) {
    const element = <FontAwesomeIcon icon={faHome} />

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    return (
      <div className="sidebar">
        <nav className="navbar navbar-end" role="navigation" aria-label="main navigation"  >
          <div className="navbar-menu navigation">
              <NavLink to='/' className="home" onClick={() => setSelectedRoute('/')}>{element}</NavLink> 
                                {/* <Menu className="navbar-menu" setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} />    */}
                                
          </div>     
        </nav>
        <div className="searchbar-container">
          <SearchBar className="searchbar"            
            setSearchData={setSearchData}  />
          <Menu className="navbar-menu" setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} /> 
          
          
        </div>
        <SavedItems pin={pin} className="saved-items" />
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