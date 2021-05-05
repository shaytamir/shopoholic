export const initialProducts = {
  products: [],
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_Products":
      return { ...state, products: action.payload.data };

    // });
    case "ADD_Product":
      let addProducts = [action.payload, ...state.products];
      state.products = addProducts;
      return { ...state };

    case "patch_amount_ordered":
      const patchAmount = state.products.map((product) => {
        if (product._id === action.payload._id) {
          console.log(product);
          product.amount_ordered = action.payload.amount_ordered;
          console.log(product);
        }
        return product;
      });
      state.products = patchAmount;
      console.log(patchAmount);
      return { ...state };

    case "PATCH_Product":
      let patchProducts = state.products.map((product) => {
        if (product._id === action.payload.productId) {
          product.title = action.payload.obj.title;
          product.desc = action.payload.obj.desc;
          product.price = action.payload.obj.price;
          product.amount = action.payload.obj.amount;
          product.image = action.payload.obj.image;
        }
        return product;
      });
      state.products = patchProducts;
      return { ...state };

    case "DELETE_Product":
      let DELETEProduct = state.products.filter((product) => {
        return product._id !== action.payload;
      });
      state.products = DELETEProduct;
      return { ...state };

    default:
      return state;
  }
};
