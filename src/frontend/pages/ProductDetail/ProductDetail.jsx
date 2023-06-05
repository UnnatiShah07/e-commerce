import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./productDetail.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import { addToCart, addToWishlist, getProductDetails } from "../../apiServices";
import { useAuthContext, useProductContext } from "../../contexts";
import { useCustomToast } from "../../utils";
import { Loader } from "../../components";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { productDetails, wishlistItem, cartItems, loading },
    dispatch,
  } = useProductContext();
  const {
    state: { token },
  } = useAuthContext();
  const { showToast } = useCustomToast();
  const isInCart = cartItems.some((prod) => prod._id === productDetails?._id);
  const isInWishlist = wishlistItem.some(
    (prod) => prod._id === productDetails?._id
  );

  useEffect(() => {
    getProductDetails(id, dispatch);
  }, []);

  return (
    <div className="product-detail">
      <div className="card">
        <div className="image-container">
          <img src={productDetails.image} alt="" />
        </div>
        <div className="details">
          <h2>{productDetails.name}</h2>
          <p className="desc">{productDetails.description}</p>
          <p className="price">
            <span className="old-price">
              <span className="rupees-icon">₹ </span>
              {productDetails.prevPrice}
            </span>
            <span className="rupees-icon"> ₹ </span>
            {productDetails.price}
            <span className="off-price">- {productDetails.discount}%</span>
          </p>
          <div className="rating-container">
            <Rating
              initialValue={productDetails.rating}
              allowFraction
              fillIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              emptyIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              allowHover={false}
            />
            <p>{productDetails.rating}</p>
          </div>
          <div className="btn-container">
            {isInCart ? (
              <button onClick={() => navigate("/cart")}>Go to Cart</button>
            ) : (
              <button
                onClick={() =>
                  token
                    ? addToCart(
                        { product: productDetails },
                        dispatch,
                        showToast
                      )
                    : navigate("/login")
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
                  token
                    ? addToWishlist(
                        { product: productDetails },
                        dispatch,
                        showToast
                      )
                    : navigate("/login")
                }
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ProductDetail;
