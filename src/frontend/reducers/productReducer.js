const productInitState = {
  products: [],
  categories: [],
  cartItems: [],
  wishlistItem: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_WISHLIST_ITEMS":
      return { ...state, wishlistItem: action.payload };
    default:
      return state;
  }
};

export { productInitState, productReducer };
