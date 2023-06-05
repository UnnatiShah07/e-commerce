import { axiosInstance } from "../utils";

export const getProductList = async (dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    const { data, status } = await axiosInstance.get("/api/products");
    if (status === 200) {
      dispatch({ type: "SET_PRODUCTS", payload: data.products });
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: data.products });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  } catch (error) {
    dispatch({ type: "SET_LOADING", payload: false });
    console.log(
      "error from get product service",
      error.response.data.message,
      error.response
    );
  }
};

export const getProductDetails = async (productId, dispatch) => {
  dispatch({ type: "SET_LOADING", payload: true });
  try {
    const { data, status } = await axiosInstance.get(
      `/api/products/${productId}`
    );
    if (status === 200) {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_PRODUCT_DETAILS", payload: data.product });
    }
  } catch (error) {
    dispatch({ type: "SET_LOADING", payload: false });
    console.log(
      "error from get product service",
      error.response.data.message,
      error.response
    );
  }
};

export const getCategoryList = async (dispatch) => {
  try {
    const { data, status } = await axiosInstance.get("/api/categories");
    if (status === 200) {
      dispatch({ type: "SET_CATEGORIES", payload: data.categories });
    }
  } catch (error) {
    console.log(
      "error from get category service",
      error.response.data.message,
      error.response
    );
  }
};
