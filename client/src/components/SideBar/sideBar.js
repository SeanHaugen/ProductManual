import React, {useState, useEffect} from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import axios from "axios";
import './sidebar.css';

// import Bookmark from 'react-bookmark';
import { NavLink } from 'react-router-dom';

function SideBar ({pin, subCategory, category}) {

    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState('');
  

    return (
        <>
        <Sidebar className="sidebar ">
            <Menu className=" is-parent is-vertical is-3">
            <h1>Saved Links</h1>
                <SubMenu className="content">
                    
                    <hr />
                        {pin.map((item, index) => (
                            <>
                            <MenuItem className="links" >
                                <NavLink to={`/${category}/${subCategory}/${item}`} className="subtitle" key={index}>{item}</NavLink>
                            </MenuItem>
                            </>
                        
                            ))
                        }
                </SubMenu>
            
            </Menu>
        </Sidebar>
        </>
    )
}

export default SideBar;