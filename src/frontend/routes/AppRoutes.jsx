import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing, ProductDetail, Products } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
