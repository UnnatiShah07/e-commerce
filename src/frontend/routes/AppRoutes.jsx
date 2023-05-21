import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js"
import { Landing } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/"  element={<Landing/>}/>
      <Route path="/mockman"  element={<Mockman/>}/>
    </Routes>
  );
};

export default AppRoutes;
