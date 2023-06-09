const productInitState = {
  products: [],
  categories: [],
  cartItems: [],
  wishlistItem: [],
  productDetails: {},
  filteredProducts: [],
  loading: false,
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
    case "SET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "SET_FILTERED_PRODUCTS":
      return { ...state, filteredProducts: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "CLEAR_PRODUCT_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { productInitState, productReducer };
