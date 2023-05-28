import { axiosInstance } from "../utils";

export const getWishlist = async (dispatch) => {
  try {
    const { data, status } = await axiosInstance.get("/api/user/wishlist");
    if (status === 200)
      dispatch({ type: "SET_CART_ITEMS", payload: data.wishlist });
  } catch (error) {
    console.log(
      "error from get wishlist service",
      error.response.data.message,
      error.response
    );
  }
};

export const addToWishlist = async (params, dispatch) => {
  try {
    const { data, status } = await axiosInstance.post(
      "/api/user/wishlist",
      params
    );
    if (status === 201)
      dispatch({ type: "SET_WISHLIST_ITEMS", payload: data.wishlist });
  } catch (error) {
    console.log(
      "error from add wishlist service",
      error.response.data.message,
      error.response
    );
  }
};

export const removeFromWishlist = async (productId, dispatch) => {
  try {
    const { data, status } = await axiosInstance.delete(
      `/api/user/wishlist/${productId}`
    );
    console.log(data, status, "===");
    if (status === 200)
      dispatch({ type: "SET_WISHLIST_ITEMS", payload: data.wishlist });
  } catch (error) {
    console.log(
      "error from remove wishlist service",
      error.response.data.message,
      error.response
    );
    throw new Error("Something went wrong!");
  }
};
