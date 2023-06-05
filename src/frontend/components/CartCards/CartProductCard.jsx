import {
  addToWishlist,
  changeCountInCart,
  removeFromCart,
} from "../../apiServices";
import { useProductContext } from "../../contexts";
import { useCustomToast } from "../../utils";
import "./cartProductCard.css";

const CartProductCard = ({ item }) => {
  const {
    state: { wishlistItem },
    dispatch,
  } = useProductContext();
  const { showToast } = useCustomToast();
  const isInWishlist = wishlistItem.find((prod) => prod._id === item._id);

  const moveToWhishlist = () => {
    if (!isInWishlist) addToWishlist({ product: item }, dispatch, showToast);
  };

  return (
    <div className="cart-product-card">
      <div className="image-container">
        <img src={item.image} alt="" />
      </div>
      <div className="details">
        <p className="name">{item.name}</p>
        <p className="price">
          <span className="old-price">
            <span className="rupees-icon">₹ </span>
            {item.prevPrice}
          </span>
          <span className="rupees-icon"> ₹ </span>
          {item.price}
        </p>
        <p className="discount-amount">{item.discount}% off</p>
        <div className="qunt-container">
          <p>Quantity: </p>
          <button
            className="count-btn"
            onClick={() => changeCountInCart(item._id, "increment", dispatch)}
          >
            +
          </button>
          {item.qty}
          <button
            className="count-btn"
            onClick={() =>
              item.qty > 1 && changeCountInCart(item._id, "decrement", dispatch)
            }
          >
            -
          </button>
        </div>
        <button
          className="action-btn"
          onClick={() => removeFromCart(item._id, dispatch, showToast)}
        >
          Remove From Cart
        </button>
        <button className="action-btn" onClick={moveToWhishlist}>
          {isInWishlist ? "Added to wishlist" : "Add To Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
