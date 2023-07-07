import React, { useState } from "react";
import SearchedItems from "./SearchedItems";
import ReactPaginate from "react-paginate";
import Fuse from "fuse.js";

function SearchDropdown({ searchData, setItem, itemsPerPage, query }) {
  const fuseSearch = (items, keyword) => {
    const options = {
      keys: ["name", "item_number"],
      threshold: 0.1, // Adjust as needed
      location: 1,
      distance: 600,
      includeMatches: true,
      shouldSort: true,
      isCaseSensitive: false,
    };

    const fuse = new Fuse(items, options);
    const result = fuse.search(keyword);
    return result.map((item) => item.item);
  };

  const searchResults = fuseSearch(searchData, query);
  // console.log(searchResults);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = searchData.slice(itemOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(searchData.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <SearchedItems currentItems={currentItems} setItem={setItem} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination pagination-list"
      />
    </>
  );
}

export default SearchDropdown;

// const [currentPage, setCurrentPage] = useState("1");

// const handlePageChange = (newPage) => {
//   setCurrentPage(newPage);
// };

// console.log(searchData);

// return (
//   <>
//     <p></p>
//     <div className="product-list-container">
//       {searchData.map((product) => {
//         return (
//           <div className="product-list-items" key={product.item_number}>
//             <NavLink
//               to={product.item_number}
//               className="column is-mobile product box"
//               onClick={() => setItem(`${product.item_number}`)}
//             >
//               <ul>
//                 <li>
//                   {product.name} - {product.item_number}
//                 </li>
//               </ul>
//             </NavLink>
//           </div>
//         );
//       })}
//     </div>
//     <Pagination searchData={searchData} />
//   </>
// );
