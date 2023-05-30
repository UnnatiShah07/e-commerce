import { handleLogin, handleSignup } from "./authServices";
import {
  getProductList,
  getProductDetails,
  getCategoryList,
} from "./productServices";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "./wishlistServices";
import {
  getCartItems,
  addToCart,
  removeFromCart,
  changeCountInCart,
} from "./cartServices";

export {
  handleLogin,
  handleSignup,
  getProductList,
  getProductDetails,
  getCategoryList,
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  getCartItems,
  addToCart,
  removeFromCart,
  changeCountInCart,
};
