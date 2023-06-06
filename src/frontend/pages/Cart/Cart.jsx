import "./cart.css";
import { useProductContext } from "../../contexts";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CartProductCard, CartTotalCard } from "../../components";

const Cart = () => {
  const {
    state: { cartItems },
  } = useProductContext();
  const navigate = useNavigate();
  const cartCount = cartItems.length;

  console.log("cartItems", cartItems.length, cartItems);

  return (
    <div className="cart-page">
      <p className="heading">{`My Cart  (${cartCount})`}</p>
      {cartItems.length ? (
        <div className="list-container">
          <div className="list-product-div">
            {cartItems.map((item) => (
              <CartProductCard key={item._id} item={item} />
            ))}
          </div>
          <div className="list-total-div">
            <CartTotalCard isCart />
          </div>
        </div>
      ) : (
        <>
          <p className="empty">Your cart is empty!</p>
          <button className="btn-margin" onClick={() => navigate("/products")}>
            <IoArrowBack size={20} />
            <p>Go to products</p>
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
