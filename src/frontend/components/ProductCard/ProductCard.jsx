import "./productCard.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../apiServices/wishlistServices";
import { useProductContext } from "../../contexts";

const ProductCard = ({
  item,
  isLike,
  isAddToCart,
  isProduct,
  isMoveToCart,
}) => {
  const navigate = useNavigate();
  const {
    state: { wishlistItem, products },
    dispatch,
  } = useProductContext();
  const isWishlist = wishlistItem.find((prod) => prod.id === item.id);

  const redirectToDetails = () =>
    navigate(isProduct ? `${item.id}` : `products/${item.id}`, {
      state: { item },
    });

  return (
    <div className="product-card" key={item.id}>
      <div>
        <div style={{ overflow: "hidden", height: "250px" }}>
          <img
            className="product-image"
            src={item.image}
            alt="plantPhoto"
            onClick={redirectToDetails}
          />
        </div>
        <p className="product-text">{item.name}</p>
        <div className="discount">-{item.discount}%</div>
        {isLike && (
          <div>
            {isWishlist ? (
              <div
                className="wishlist"
                onClick={() => removeFromWishlist(item.id, dispatch)}
              >
                <HiHeart size={20} color="red" />
              </div>
            ) : (
              <div className="wishlist" onClick={() => addToWishlist({ product: item }, dispatch)}>
                <HiOutlineHeart
                  size={20}
                  
                />
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <Rating
          initialValue={item.rating}
          allowFraction
          fillIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
          emptyIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
          allowHover={false}
        />
        <p className="price">
          <span className="old-price">
            <span className="rupees-icon">₹ </span>
            {item.prevPrice}
          </span>
          <span className="rupees-icon"> ₹ </span>
          {item.price}
        </p>
        {isAddToCart ? (
          <button>Add to Cart</button>
        ) : isMoveToCart ? (
          <button>Move to Cart</button>
        ) : (
          <button onClick={redirectToDetails}>View Product</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
