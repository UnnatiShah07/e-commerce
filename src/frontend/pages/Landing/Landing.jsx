import React, { useEffect, useState } from "react";
import "./landing.css";
import { HomeBack, HomeBack2, HomeBack3 } from "../../assets";
import axios from "axios";
import { useProductContext } from "../../contexts";
import { ProductCard } from "../../components";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();
  const {
    state: { categories, products },
    dispatch,
  } = useProductContext();
  const newArrivals = products.slice(8, 12).concat(products.slice(3, 4));

  useEffect(() => {
    getProductList();
    getCategoryList();
  }, []);

  const getProductList = async () => {
    try {
      const { data, status } = await axios.get("/api/products");
      if (status === 200) {
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryList = async () => {
    try {
      const { data, status } = await axios.get("/api/categories");
      if (status === 200) {
        dispatch({ type: "SET_CATEGORIES", payload: data.categories });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToProduct = () => navigate("/products");

  return (
    <div className="landing">
      <div className="banner">
        {/* <div className="image-container">
          <img src={HomeBack} alt="HomeBack" className="back-image-one" />
          <img src={HomeBack2} alt="HomeBack" className="back-image-two" />
          <img src={HomeBack3} alt="HomeBack" className="back-image-three" />
        </div> */}
        <div className="intro-container">
          <div className="welcome-card">
            <div>
              <p className="intro-title">
                Welcome to <span>GoGreen 🌿</span>
              </p>
              <p className="intro-title">The online plant shop</p>
            </div>
            <p className="quote">Bring joy to your home 💚</p>
            <button onClick={redirectToProduct}>Explore Plants</button>
          </div>
        </div>
      </div>

      <p className="sub-title">Categories</p>
      <div className="category-conatiner">
        {categories.map((image) => (
          <div className="cat-card" key={image.id}>
            <img className="cat-image" src={image.image} alt="plantPhoto" />
            <p className="cat-text">{image.category}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <p className="sub-title">New Arrivals</p>
      </div>
      <div className="category-conatiner">
        {newArrivals.map((image) => (
          <ProductCard item={image} key={image.id} />
        ))}
      </div>

      <footer>
        <p className="footer-text">Develop by Unnati</p>
      </footer>
    </div>
  );
};

export default Landing;
