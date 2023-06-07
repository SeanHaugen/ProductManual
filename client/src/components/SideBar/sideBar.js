import React, {useState, useEffect} from "react"
import axios from "axios";
import './sidebar.css';

// import Bookmark from 'react-bookmark';
import { NavLink } from 'react-router-dom';

function SideBar ({pin, subCategory, category}) {

    // const [products, setProducts] = useState([]);
    // const [error, setError] = useState('');
  

    return (
        <>
        <div className="sidebar ">
            <div className=" is-parent is-vertical is-3">
            <article className=" is-child notification is-success">
                <div className="content">
                    <h1 className="title">Saved Items</h1>
                    <hr />
                        {pin.map((item, index) => (
                            <>
                            <div className="links" >
                                <NavLink to={`/${category}/${subCategory}/${item}`} className="subtitle" key={index}>{item}</NavLink>
                            </div>
                            </>
                        
                            ))
                        }
                </div>
            </article>
            </div>
        </div>
        </>
    )
}

export default SideBar;