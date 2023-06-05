const filterInitState = {
  categories: {
    airPlant: false,
    floweringPlant: false,
    climbers: false,
    fruitPlant: false,
    groundCovers: false,
    hangingBasketPlant: false,
    indoors: false,
    cactiSucculents: false,
  },
  price: 2500,
  rating: "",
  sortBy: "",
  searchText: "",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES_TYPE":
      return {
        ...state,
        categories: { ...state.categories, ...action.payload },
      };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "SET_SORT_TYPE":
      return { ...state, sortBy: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "CLEAR_FILTERS":
      return filterInitState;
    default:
      return state;
  }
};

export { filterInitState, filterReducer };
