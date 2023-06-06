import { useNavigate } from "react-router-dom";
import {
  useAddressContext,
  useAuthContext,
  useProductContext,
} from "../../contexts";
import "./cartTotalCard.css";
import AddressCard from "../AddressCard/AddressCard";
import Plant from "../../assets/svg/seedling-icon.svg";
import { useCustomToast } from "../../utils";
import { removeFromCart } from "../../apiServices";

const CartTotalCard = ({ isCart }) => {
  const {
    state: { cartItems },
    dispatch: productDispatch,
  } = useProductContext();
  const {
    state: { deliveryAddress },
    dispatch,
  } = useAddressContext();
  const {
    state: { userDetails },
  } = useAuthContext();
  const navigate = useNavigate();
  const { showToast } = useCustomToast();

  const cartItemsCount = cartItems.length;
  const totalPrice = cartItems.reduce(
    (acc, prod) => acc + prod.prevPrice * prod.qty,
    0
  );
  const totalDiscount = cartItems.reduce(
    (acc, prod) => acc + (prod.prevPrice - prod.price) * prod.qty,
    0
  );
  const deliveryCharges = 499;
  const totalAmount = totalPrice - totalDiscount + deliveryCharges;

  const getAddressInString = () =>
    `${deliveryAddress.street}, ${deliveryAddress.city}, ${deliveryAddress.pincode}, ${deliveryAddress.state}, ${deliveryAddress.country}`;

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_wO2E6qFply0zx6",
      amount: totalAmount * 100,
      currency: "INR",
      name: "GoGreen",
      image: Plant,
      description: "Test Transaction",
      handler: function (response) {
        // Handle the success callback
        showToast("Order placed successfully!", "success");
        const order = {
          paymentId: response.razorpay_payment_id,
          amount: totalAmount,
          address: getAddressInString(),
          mobile: deliveryAddress.mobile,
          orderList: cartItems,
        };
        dispatch({ type: "SET_ORDER_DETAILS", payload: order });
        cartItems.map((item) =>
          removeFromCart(item._id, productDispatch, showToast)
        );
        navigate("/profile");
      },
      prefill: {
        name: deliveryAddress.name,
        email: userDetails?.email,
        contact: deliveryAddress.mobile,
      },
      notes: {
        address: getAddressInString(),
      },
      theme: {
        color: "#a0f7cd",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePlaceOrder = () => {
    if (Object.keys(deliveryAddress).length) {
      handlePayment();
    } else {
      showToast("Please add address to place order", "error");
    }
  };

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
        <button className="order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default CartTotalCard;
