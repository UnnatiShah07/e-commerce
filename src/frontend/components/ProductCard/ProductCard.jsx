import "./productCard.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../contexts";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  changeCountInCart,
} from "../../apiServices";
import { useCustomToast } from "../../utils";

const ProductCard = ({
  item,
  isLike,
  isAddToCart,
  isProduct,
  isMoveToCart,
}) => {
  const navigate = useNavigate();
  const {
    state: { wishlistItem, cartItems },
    dispatch,
  } = useProductContext();
  const { showToast } = useCustomToast();

  const isInWishlist = wishlistItem.some((prod) => prod._id === item._id);
  const isInCart = cartItems.some((prod) => prod._id === item._id);

  const redirectToDetails = () =>
    navigate(isProduct ? `${item._id}` : `/products/${item._id}`, {
      state: { item },
    });

  const moveToCart = () => {
    removeFromWishlist(item._id, dispatch, showToast);
    if (isInCart) changeCountInCart(item._id, "increment", dispatch);
    else addToCart({ product: item }, dispatch, showToast);
    showToast("Item moved to cart")
  };

  return (
    <div className="product-card" key={item._id}>
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
            {isInWishlist ? (
              <div
                className="wishlist"
                onClick={() =>
                  removeFromWishlist(item._id, dispatch, showToast)
                }
              >
                <HiHeart size={20} color="red" />
              </div>
            ) : (
              <div
                className="wishlist"
                onClick={() =>
                  addToWishlist({ product: item }, dispatch, showToast)
                }
              >
                <HiOutlineHeart size={20} />
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
          <>
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
          </>
        ) : isMoveToCart ? (
          <button onClick={moveToCart}>Move to Cart</button>
        ) : (
          <button onClick={redirectToDetails}>View Product</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
