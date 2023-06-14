import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchBar() {


    const element = <FontAwesomeIcon icon={faSearch} />


    const [searchData, setSearchData] = useState('');
    const [isOpen, setIsOpen] = useState(true);


    

    const handleClick = (e) => { 
        e.preventDefault();
        setIsOpen(!isOpen);
        if(isOpen === true) {
            return (
                <>
                <section className="search-section">
                    <input type="text" className="search"/>
                </section>
                </>
            )
        }
    }

    return (
    <>
        <span className="icon is-large">
            <button className="search-button icon is-large" onClick={handleClick} >
                <i className="search-icon fas fa-search">{element}</i>
            </button>           
        </span>
        <div>
            {isOpen && (
                    <section className="search-section">
                        <input type="text" className="searchbar input is-medium"/>
                    </section>
                )}
        </div>
    </>


    )
}

export default SearchBar;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const endpoint = "products";
    //             const apiUrl = `http://localhost:4000/${endpoint}`;
    //             const response = await axios.get(apiUrl);
    //             setSearchData(response.data);
    //         } catch (error) {
    //             console.error("Error fetching API data:", error);
    //         }
    //         };
    //         fetchData();
    //     }, []);