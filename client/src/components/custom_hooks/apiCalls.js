import { useEffect } from "react";
import axios from "axios";

export const fetchCategoryData = (setState) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `http://localhost:4000/`;
        const response = await axios.get(apiUrl);
        setState(response.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);
};

export const fetchSubCategoryData = (setState, category) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const endpoint = `${category}`;
          const apiUrl = `http://localhost:4000/${endpoint}`;

          const response = await axios.get(apiUrl);
          setState(response.data);
        } else {
          setState([]);
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchData();
  }, [category]);
};

export const fetchProductsData = (setState, selection) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selection.length > 0) {
          const response = await axios.get(
            `/products/itemSelect?category=${selection}`
          );
          setState(response.data);
        } else {
          setState([]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [selection]);
};

export const fetchItemData = (setState, item) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `/category/subcategory?item_number=${item}`
        );
        setState(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [item]);
};

export const fetchSearchData = (setState, searchTerm) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/item/searchItem?keyword=${searchTerm}`
        );
        setState(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [searchTerm]);
};

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         `/category/subcategory?item_number=${item}`
//       );
//       setProducts(response.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   fetchProducts();
// }, []);
