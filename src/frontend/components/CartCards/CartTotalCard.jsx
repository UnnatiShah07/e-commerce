import { useProductContext } from "../../contexts";
import "./cartTotalCard.css";

const CartTotalCard = () => {
  const {
    state: { cartItems },
  } = useProductContext();
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
      <div className="border-view" />
      <div className="price-row bold-text">
        <p>Total Amount</p>
        <p>
          <span className="rupees-icon">₹ </span>
          {totalAmount}
        </p>
      </div>
      <div className="border-view" />
      <p className="padding-vertical">
        You will save <span className="rupees-icon">₹ </span>
        {totalDiscount} on this order{" "}
      </p>
      <button className="order-btn">Place Order</button>
    </div>
  );
};

export default CartTotalCard;
