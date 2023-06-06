import { useNavigate } from "react-router-dom";
import { useAddressContext, useProductContext } from "../../contexts";
import "./cartTotalCard.css";
import AddressCard from "../AddressCard/AddressCard";

const CartTotalCard = ({ isCart }) => {
  const {
    state: { cartItems },
  } = useProductContext();
  const {
    state: { deliveryAddress },
  } = useAddressContext();
  const navigate = useNavigate();

  const cartItemsCount = cartItems.length;
  const totalPrice = cartItems.reduce(
    (acc, prod) => acc + prod.price * prod.qty,
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, prod) => acc + (prod.prevPrice - prod.price) * prod.qty,
    0
  );
  const deliveryCharges = 499;
  const totalAmount = totalPrice + deliveryCharges;

  return (
    <div className="cart-total-card">
      {!isCart && (
        <>
          <p className="card-title">Order Summary</p>
          <div className="border-view" />
          <div className="price-row card-title">
            <p>Items</p>
            <p>Quantity</p>
          </div>
          {cartItems.map((item) => (
            <div className="price-row" key={item.id}>
              <p>{item.name}</p>
              <p>
                {item.qty} X <span className="rupees-icon">₹ </span>
                {item.price}
              </p>
            </div>
          ))}
          <div className="border-view" />
        </>
      )}

      <p className="card-title">Price Details</p>
      <div className="border-view" />
      <div className="price-row">
        <p>Price ({cartItemsCount} items)</p>
        <p>
          <span className="rupees-icon">₹ </span>
          {totalPrice}
        </p>
      </div>
      <div className="price-row">
        <p>Discount</p>
        <p>
          -<span className="rupees-icon"> ₹ </span>
          {totalDiscount}
        </p>
      </div>
      <div className="price-row">
        <p>Delivery Charges</p>
        <p>
          <span className="rupees-icon">₹ </span>
          {deliveryCharges}
        </p>
      </div>

      {isCart && <div className="border-view" />}

      <div className="price-row bold-text">
        <p>Total Amount</p>
        <p>
          <span className="rupees-icon">₹ </span>
          {totalAmount}
        </p>
      </div>
      <div className="border-view" />

      {isCart && (
        <>
          <p className="padding-vertical">
            You will save <span className="rupees-icon">₹ </span>
            {totalDiscount} on this order{" "}
          </p>
          <button className="order-btn" onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </>
      )}

      {!isCart && (
        <>
          <p className="card-title">Deliver at</p>
          <div className="border-view" />
          <div style={{ marginTop: "10px" }}>
            <AddressCard item={deliveryAddress} isEdit={false} />
          </div>
        </>
      )}

      {!isCart && (
        <button className="order-btn" onClick={() => navigate("/checkout")}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default CartTotalCard;
