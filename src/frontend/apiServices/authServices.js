import { axiosInstance } from "../utils";

export const handleLogin = async (params) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", params);
    return response.data;
  } catch (error) {
    console.error(error.response, "from login service");
    if (error.response.status === 404)
      throw new Error("The email you entered is not registered");

    throw new Error("Something went wrong!");
  }
};

export const handleSignup = async (params) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", params);
    return response.data;
  } catch (error) {
    console.error(error.response, "from signup service");
    throw new Error("Something went wrong!");
  }
};
