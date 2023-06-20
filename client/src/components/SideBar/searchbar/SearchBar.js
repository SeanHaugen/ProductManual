import React, {useState, useEffect, useCallback} from "react";

import axios from "axios";
// import Fuse from 'fuse.js'


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'




function SearchBar({setSearchData}) {


    // const element = <FontAwesomeIcon icon={faSearch} />


    // const [searchData, setSearchData] = useState([]);
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
    // console.log(searchData)
    // console.log(query);


    const handleOnSearch = useCallback((event) => {
        event.preventDefault();
        setQuery(event.target.value);
      })


    return (
    <>
        <div>
            <form>
                <section className="search-section">
                    <input type="text" className="searchbar input is-medium is-rounded" value={query} onChange={handleOnSearch} />
                </section>
            </form>

                
        </div>
    </>


    )
}

export default SearchBar;

  
