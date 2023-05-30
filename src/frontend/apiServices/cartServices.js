import { axiosInstance } from "../utils";

export const getCartItems = async (dispatch) => {
  try {
    const { data, status } = await axiosInstance.get("/api/user/cart");
    if (status === 200)
      dispatch({ type: "SET_CART_ITEMS", payload: data.cart });
  } catch (error) {
    console.log(
      "error from get cart service",
      error.response.data.message,
      error.response
    );
  }
};

export const addToCart = async (params, dispatch, showToast) => {
  try {
    const { data, status } = await axiosInstance.post("/api/user/cart", params);
    if (status === 201) {
      dispatch({ type: "SET_CART_ITEMS", payload: data.cart });
      showToast("Item added to cart");
    }
  } catch (error) {
    console.log(
      "error from add cart service",
      error.response.data.message,
      error.response
    );
  }
};

export const removeFromCart = async (productId, dispatch, showToast) => {
  try {
    const { data, status } = await axiosInstance.delete(
      `/api/user/cart/${productId}`
    );
    if (status === 200) {
      dispatch({ type: "SET_CART_ITEMS", payload: data.cart });
      showToast("Item removed from cart");
    }
  } catch (error) {
    console.log(
      "error from remove cart service",
      error.response.data.message,
      error.response
    );
  }
};

export const changeCountInCart = async (productId, type, dispatch) => {
  try {
    const { data, status } = await axiosInstance.post(
      `/api/user/cart/${productId}`,
      { action: { type } }
    );
    if (status === 200)
      dispatch({ type: "SET_CART_ITEMS", payload: data.cart });
  } catch (error) {
    console.log(
      "error from change count cart service",
      error.response.data.message,
      error.response
    );
  }
};
