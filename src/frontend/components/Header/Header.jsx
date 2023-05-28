import React from "react";
import "./header.css";
import Plant from "../../assets/svg/seedling-icon.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useProductContext } from "../../contexts";

const Header = () => {
  const navigate = useNavigate();
  const {
    state: { token },
  } = useAuthContext();
  const {
    state: { wishlistItem },
  } = useProductContext();
  const wishlistCount = wishlistItem.length;

  const redirectTo = (path) => navigate(path);

  return (
    <div className="header-container">
      <div className="logo-container" onClick={() => redirectTo("/")}>
        <img src={Plant} alt="LogoImage" className="logo-img" />
        <p className="logo-text">GoGreen</p>
      </div>
      <div className="search-container">
        <BiSearch size={20} />
        <input type="text" placeholder="Search..." className="search-input" />
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
          <div className="popup">{wishlistCount}</div>
        </div>
        <div className="pos-relative" onClick={() => redirectTo("/cart")}>
          <BsCart2 size={25} />
          {/* <div className="popup">2</div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
