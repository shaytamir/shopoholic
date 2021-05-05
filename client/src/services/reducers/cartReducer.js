export const initialCart = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      let addItem = [...state.cart, action.payload];
      return { ...state, cart: addItem };

    case "dropFromCart":
      let dropItem = state.cart.filter((item) => {
        return item._id !== action.payload;
      });
      return { ...state, cart: dropItem };

    default:
      return state;
  }
};
