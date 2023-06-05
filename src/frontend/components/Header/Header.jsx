import React from "react";
import "./header.css";
import Plant from "../../assets/svg/seedling-icon.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TbPlant2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {
  useAuthContext,
  useFilterContext,
  useProductContext,
} from "../../contexts";

const Header = () => {
  const navigate = useNavigate();
  const {
    state: { token },
  } = useAuthContext();
  const {
    state: { wishlistItem, cartItems },
  } = useProductContext();
  const {
    state: { searchText },
    dispatch,
  } = useFilterContext();
  const wishlistCount = wishlistItem.length;
  const cartCount = cartItems.length;

  const redirectTo = (path) => navigate(path);

  const updateSearchText = (text) => {
    navigate("/products");
    dispatch({ type: "SET_SEARCH_TEXT", payload: text });
  };

  return (
    <div className="header-container">
      <div className="logo-container" onClick={() => redirectTo("/")}>
        <img src={Plant} alt="LogoImage" className="logo-img" />
        <p className="logo-text">GoGreen</p>
      </div>
      <div className="search-container">
        <BiSearch size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchText}
          onChange={(e) => updateSearchText(e.target.value)}
        />
      </div>
      <div className="btn-container">
        {token ? (
          <div className="pos-relative" onClick={() => redirectTo("/profile")}>
            <AiOutlineUser size={25} />
          </div>
        ) : (
          <button className="login-btn" onClick={() => redirectTo("/login")}>
            Login
          </button>
        )}
        <div className="pos-relative" onClick={() => redirectTo("/wishlist")}>
          <HiOutlineHeart size={25} />
          {wishlistCount > 0 && <div className="popup">{wishlistCount}</div>}
        </div>
        <div className="pos-relative" onClick={() => redirectTo("/cart")}>
          <BsCart2 size={25} />
          {cartCount > 0 && <div className="popup">{cartCount}</div>}
        </div>
        <div className="pos-relative" onClick={() => redirectTo("/products")}>
          <TbPlant2 size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
