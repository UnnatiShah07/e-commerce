import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./productDetail.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { addToCart, addToWishlist, getProductDetails } from "../../apiServices";
import { useProductContext } from "../../contexts";
import { useCustomToast } from "../../utils";

const ProductDetail = () => {
  const {
    state: { item },
  } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { productDetails, wishlistItem, cartItems },
    dispatch,
  } = useProductContext();
  const { showToast } = useCustomToast();
  const isInCart = cartItems.some((prod) => prod._id === item._id);
  const isInWishlist = wishlistItem.some((prod) => prod._id === item._id);

  useEffect(() => {
    getProductDetails(id, dispatch);
  }, []);

  return (
    <div className="product-detail">
      <div className="card">
        <div className="image-container">
          <img src={item.image} alt="" />
        </div>
        <div className="details">
          <h2>{item.name}</h2>
          <p className="desc">{item.description}</p>
          <p className="price">
            <span className="old-price">
              <span className="rupees-icon">₹ </span>
              {item.prevPrice}
            </span>
            <span className="rupees-icon"> ₹ </span>
            {item.price}
            <span className="off-price">- {item.discount}%</span>
          </p>
          <div className="rating-container">
            <Rating
              initialValue={item.rating}
              allowFraction
              fillIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              emptyIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              allowHover={false}
            />
            <p>{item.rating}</p>
          </div>
          <div className="btn-container">
            {isInCart ? (
              <button onClick={() => navigate("/cart")}>Go to Cart</button>
            ) : (
              <button
                onClick={() =>
                  addToCart({ product: item }, dispatch, showToast)
                }
              >
                Add to Cart
              </button>
            )}
            {isInWishlist ? (
              <button onClick={() => navigate("/wishlist")}>
                Go to Wishlist
              </button>
            ) : (
              <button
                onClick={() =>
                  addToWishlist({ product: item }, dispatch, showToast)
                }
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
