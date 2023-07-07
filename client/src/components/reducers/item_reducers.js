const itemReducer = (state = [], action) => {
  switch (action.type) {
    case "items/addItem": {
      return [...state, action.payload];
    }
    case "items/removeItem": {
      return state.filter((item) => item !== action.payload);
    }
    default: {
      return state;
    }
  }
};

const state = ["data"];

const addNewItem = {
  type: "item/addItem",
  payload: "userInput",
};
