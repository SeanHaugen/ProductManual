import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import FrontPage from './home/FrontPage';
import CategoryPage from './categoryPage/CategoryPage';
import SubCategoryPage from './SubCategoryPage/SubCategoryPage';
import ItemPage from './ItemPage/ItemPage';
import SearchPage from './searchpage/SearchPage';

function main({setSelectedRoute, setCategory, setSubCategory,setItem, subCategory, category, item, setPin,searchData } ) {

    //  console.log(searchData);

    return (
        <>
        <main className='main-container'>
        <header>
          <Header setSelectedRoute={setSelectedRoute} setCategory={setCategory} setSubCategory={setSubCategory} />
        </header>
      <div className='routes-container'>
          <Routes>
            <Route path="/:category/:subCategory" element={<SubCategoryPage subCategory={subCategory} setItem={setItem} />} />
            <Route path="/:category" element={<CategoryPage category={category} subCategory={subCategory} item={item} setSubCategory={setSubCategory}/>} />
            <Route path='/:category/:subCategory/:item' element={<ItemPage item={item} setPin={setPin} searchData={searchData} />} />
            {/* <Route path='/:productSearch/:itemSearch'   /> */}
            <Route path='' element={<FrontPage searchData={searchData} setItem={setItem} />}  />
            
          </Routes>
      </div>
      </main>
        
        </>
    )
}

export default main;