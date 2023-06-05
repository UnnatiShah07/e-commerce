import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer, productInitState } from "../reducers";
import {
  getCartItems,
  getCategoryList,
  getProductList,
  getWishlist,
} from "../apiServices";
import { useAuthContext } from "./authContext";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productInitState);
  const {
    state: { token },
  } = useAuthContext();

  useEffect(() => {
    getProductList(dispatch);
    getCategoryList(dispatch);
    if (token) {
      getWishlist(dispatch);
      getCartItems(dispatch);
    }
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductProvider, useProductContext };
