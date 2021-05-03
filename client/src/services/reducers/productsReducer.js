export const initialProducts = {
  products: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_Products":
      return { ...state, products: action.payload };

    case "ADD_Product":
      let addHobbies = [...state.hobbies, action.payload];
      console.log(addHobbies);
      return { hobbies: addHobbies };

    default:
      return state;
  }
};
