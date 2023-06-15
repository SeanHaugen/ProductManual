import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";
import Fuse from 'fuse.js'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




function SearchBar() {


    const element = <FontAwesomeIcon icon={faSearch} />


    const [searchData, setSearchData] = useState([]);
    const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);



    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`/item/searchItem?keyword=${query}`);
            setSearchData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
      }, [query]);
    console.log(searchData)
    console.log(query);


    const handleOnSearch = useCallback((event) => {
        setQuery(event.target.value);
      })


    return (
    <>

        <div>
        <form>
            <section className="search-section">
                <input type="text" className="searchbar input is-medium" value={query} onChange={handleOnSearch} />
                <span className="icon is-large">
                    <button className="search-button icon is-large"  >
                        <i className="search-icon fas fa-search">{element}</i>
                    </button>           
                </span>
            </section>

        </form>

            
        </div>
        <div>
            
             <ul>
                <li>Searched Items</li>
                {searchData && searchData.map((item, index) => {
                    return (
                        <ul key={index} >
                            <li>{item}</li>
                        </ul>

                    )

                })}
            </ul> 
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


        // const handleClick = (e) => { 
    //     e.preventDefault();
    //     setIsOpen(!isOpen);
    //     if(isOpen === true) {
    //         return (
    //             <>
    //             <section className="search-section">
    //                 <input type="text" className="search"/>
    //             </section>
    //             </>
    //         )
    //     }
    // }




//Fuse.js 
    ////////////////////////////////////////////////////////////////
        // useEffect(() => {
    //     const fuse = new Fuse(searchData, {
    //         keys:  [
    //             'name',
    //             'item_number',
    //             'keywords',
    //             'category',
    //             'subcategory',
    //             'description',
    //             'colors',
    //             'materials'
    //         ],
    //         includeScore: true,
    //         includeMatches: true,
    //         ignoreLocation: true,
    //         threshold: 0.0,
    //     });
    //     const search = async () => {
    //         const searchResults = fuse.search(query);
    //         const limitedResults = searchResults.slice(0, 30); // Limit the results to the top 50 options

    //         if(limitedResults === results) {
    //             const exactMatch = limitedResults.name
    //             setResults(exactMatch)
    //         } else {
    //             setResults(limitedResults);
    //         }

    //         // setResults(limitedResults);
    //       };
      
    //       const debounce = (func, delay) => {
    //         let timer;
    //         return function (...args) {
    //           clearTimeout(timer);
    //           timer = setTimeout(() => func.apply(this, args), delay);
    //         };
    //       };
      
    //       const delayedSearch = debounce(search, 300); // Adjust the delay time as needed
      
    //       delayedSearch();
    // }, [query, searchData]);
    // // const searchResult = query ? results.map(result => result.name) : results;

    // console.log(results);