import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Cart,
  Landing,
  Login,
  ProductDetail,
  Products,
  Profile,
  Signup,
  Wishlist,
} from "../pages";
import { PrivateRoute } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />

      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
