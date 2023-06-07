import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import './app.css';
import background_image from './data/img/unsplash2.jpg';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/header/Header';
import CategoryPage from './components/categoryPage/CategoryPage';

import SubCategoryPage from './components/categoryPage/SubCategoryPage/SubCategoryPage';
import FrontPage from './components/home/FrontPage';
import ItemPage from './components/ItemPage/ItemPage';
import SideBar from './components/SideBar/sideBar';



function App() {

  const history = createBrowserHistory

  
  //Routing state variables
  const [selectedRoute, setSelectedRoute] = useState("");
  console.log(selectedRoute);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [item, setItem ] = useState("");
  console.log(category);
  console.log(subCategory);
  console.log(item);

  const [pin, setPin] = useState([]);
  console.log(pin);
  
  return (
    <div className="app">
    
    <main>
      <Router history={history}>
        <header>
          <Header setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory}  />
        </header>
        <SideBar pin={pin} />
        {/* <img className='background-image' src={background_image} alt="gradient background" /> */}
        <Routes>
          <Route path="/:category/:subCategory" element={<SubCategoryPage subCategory={subCategory} setItem={setItem} />} />
          <Route path="/:category" element={<CategoryPage category={category}  />} />
          <Route path='/:category/:subCategory/:item' element={<ItemPage item={item} setPin={setPin} />} />
          <Route path='' element={<FrontPage />} />
          
        </Routes>
        <footer></footer>
      </Router>
    </main>

      

    </div>
  );
}

export default App;
