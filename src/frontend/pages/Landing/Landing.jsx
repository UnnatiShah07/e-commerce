import React from "react";
import "./landing.css";
import { HomeBack, HomeBack2, HomeBack3 } from "../../assets";
import { categories } from "../../staticData";

const Landing = () => {
  return (
    <div className="landing">
      <div className="banner">
        <div className="image-container">
          <img src={HomeBack} alt="HomeBack" className="back-image-one" />
          <img src={HomeBack2} alt="HomeBack" className="back-image-two" />
          <img src={HomeBack3} alt="HomeBack" className="back-image-three" />
        </div>
        <div className="intro-container">
          <div className="welcome-card">
            <div>
              <p className="intro-title">
                Welcome to <span>GoGreen 🌿</span>
              </p>
              <p className="intro-title">The online plant shop</p>
            </div>
            <p className="quote">Bring joy to your home 💚</p>
            <button>Explore Plants</button>
          </div>
        </div>
      </div>

      <div>
        <p className="sub-title">Categories</p>
      </div>
      <div className="category-conatiner">
        {categories.map((image, index) => (
          <div className="cat-card" key={index}>
            <img className="cat-image" src={image.image} alt="plantPhoto" />
            <p className="cat-text">{image.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
