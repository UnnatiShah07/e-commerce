import { axiosInstance } from "../utils";

export const getWishlist = async (dispatch) => {
  try {
    const { data, status } = await axiosInstance.get("/api/user/wishlist");
    if (status === 200)
      dispatch({ type: "SET_WISHLIST_ITEMS", payload: data.wishlist });
  } catch (error) {
    console.log(
      "error from get wishlist service",
      error.response.data.message,
      error.response
    );
  }
};

export const addToWishlist = async (params, dispatch, showToast) => {
  try {
    const { data, status } = await axiosInstance.post(
      "/api/user/wishlist",
      params
    );
    if (status === 201) {
      dispatch({ type: "SET_WISHLIST_ITEMS", payload: data.wishlist });
      showToast("Item added to wishlist");
    }
  } catch (error) {
    console.log(
      "error from add wishlist service",
      error.response.data.message,
      error.response
    );
  }
};

export const removeFromWishlist = async (productId, dispatch, showToast) => {
  try {
    const { data, status } = await axiosInstance.delete(
      `/api/user/wishlist/${productId}`
    );
    if (status === 200) {
      dispatch({ type: "SET_WISHLIST_ITEMS", payload: data.wishlist });
      showToast("Item removed from wishlist");
    }
  } catch (error) {
    console.log(
      "error from remove wishlist service",
      error.response.data.message,
      error.response
    );
  }
};
