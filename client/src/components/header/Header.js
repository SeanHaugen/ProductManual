import React, {useState, useEffect} from "react"
import Menu from "../Menu/Menu"
import SideBar from "../SideBar/sideBar";

import SearchBar from "../searchbar/SearchBar"
import './header.css';
import logo from '../../data/img/logo1.png'
import { NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function Header({setSelectedRoute, setCategory, setSubCategory, pin}) {

    const element = <FontAwesomeIcon icon={faHome} />

    const [scrollPos, setScrollPos] = useState(0);
    const [scrollStarted, setScrollStarted] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (scrollStarted) {
          setScrollPos(window.pageYOffset);
        } else {
          const hrElement = document.querySelector('.break');
          const hrTop = hrElement.offsetTop + hrElement.offsetHeight;
          if (window.pageYOffset > hrTop) {
            setScrollStarted(true);
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollStarted]);

    return (
        <>
        {/* className={scrollPos > 5 ? 'header-scrolled' : ''} */}
        <header >
        <section className="hero  is-small level ">
                <div className="hero-body">
                    <img className="header-image"   src={logo} alt="showdown logo1" />

                        <nav className="navbar navbar-end" role="navigation" aria-label="main navigation"  >
                            <div className="navbar-menu navigation">
                                <NavLink to='/' className="home" onClick={() => setSelectedRoute('/')}>{element}</NavLink> 
                                {/* <Menu className="navbar-menu" setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} />    */}
                                <SearchBar className="search-bar navbar-item"/>
                            </div>     
                        </nav>
                        
                </div>

                <SideBar pin={pin} setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} />      
        </section>
        
        </header>
        
        <div className="breadcrumb" aria-label="breadcrumbs"></div>
        <br className="break" />
    </>
    )
}

export default Header;