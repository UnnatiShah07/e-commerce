import React from "react";
import "./header.css";
import Plant from "../../assets/svg/seedling-icon.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => navigate("/login");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Plant} alt="LogoImage" className="logo-img" />
        <p className="logo-text">GoGreen</p>
      </div>
      <div className="search-container">
        <BiSearch size={20} />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="btn-container">
        <button className="login-btn" onClick={redirectToLogin}>Login</button>
        <div className="pos-relative">
          <HiOutlineHeart size={25} />
          <div className="popup">2</div>
        </div>
        <div className="pos-relative">
          <BsCart2 size={25} />
          <div className="popup">2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
