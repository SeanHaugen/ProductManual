import React from "react";

import './relatedItems.css';

////Everything currently here is a placeholder. I will need to create further implementation for desired functionality

function RelatedItems({ product, searchData }) {

  let productKeywordsList = product.keywords.split(' ');


  const calculateSimilarity = (keywords1, keywords2) => {
    const intersection = new Set(keywords1.filter(keyword => keywords2.includes(keyword)));
    const union = new Set([...keywords1, ...keywords2]);
    return intersection.size / union.size;
  };

  const filteredItems = searchData.filter(item => {
    const itemKeywordsList = item.keywords.split(' ');
    const similarity = calculateSimilarity(productKeywordsList, itemKeywordsList);
    return similarity >= 0.9;
  });
  console.log(filteredItems.map(item => item.name));

  

    return (
      <div className="related-items-sidebar">
        <div className="box">
          Related Items: 
          <ul>
          {filteredItems.map(item => <li>{item.name}</li>)}
          </ul>
        </div>
      </div>
    );
  }


export default RelatedItems;





  // let itemKeywords = searchData.flatMap(item => item.keywords)

  // const handleMatchingKeywords = (keywords1, keywords2) => {

  //   let itemArray = searchData.map(item => item);
  //   console.log(itemArray)
  //   console.log(itemArray.map(item => item.name));



  //   let keywordConverter1 = (arr) => {
  //     return arr.map((keyword) => keyword.replace(/,/g, '').trim().toLowerCase());
  //   }

  //   let keywordConverter2 = (arr) => {
  //     return arr.map((subArray) => {
  //       return subArray.map((keyword) => keyword.replace(/,/g, '').trim().toLowerCase());
  //     });
  //   }

  //   let keywordsConverted1 = keywordConverter1(keywords1);
  //   let keywordsConverted2 = keywordConverter2(keywords2);  
    


  //   let matching = keywordsConverted1.filter(keyword => {
  //     for (let i = 0; i < keywordsConverted2.length; i++) {
  //       if (keywordsConverted2[i].includes(keyword)) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
    
  //   return matching
    

  //   }

  // console.log(handleMatchingKeywords(productKeywordsList, itemKeywordsList))
