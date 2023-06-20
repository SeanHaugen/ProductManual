import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import './app.css';
import { BrowserRouter as Router} from 'react-router-dom';


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Main from './components/main/MainPage';
import SideBar from './components/SideBar/sideBar';



function App() {

  //Routing state variables
  const [selectedRoute, setSelectedRoute] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [item, setItem ] = useState("");
  const [pin, setPin] = useState([]);

  //--->console.log statements for the above
  console.log(selectedRoute);
  // console.log(category);
  // console.log(subCategory);
  // console.log(item);  
  // console.log(pin);

//search bar stuff
  const [searchData, setSearchData] = useState([]);
  // const [query, setQuery] = useState('');
  
  
  return (
    <Router>
    <div className="app">
          <SideBar className="side-bar-container" 
            pin={pin} 
            setSelectedRoute={setSelectedRoute} 
            setCategory={setCategory} 
            setSubCategory={setSubCategory}
            setSearchData={setSearchData} /> 

          <Main className="main-page-container" 
            subCategory={subCategory} 
            setSubCategory={setSubCategory} 
            category={category} 
            setItem={setItem} 
            item={item} 
            setPin={setPin}
            searchData={searchData} />
    </div>
    </Router>
  );
}

export default App;
