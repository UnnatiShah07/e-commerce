import {
  useAddressContext,
  useAuthContext,
  useProductContext,
} from "../../contexts";
import "./profile.css";
import { useCustomToast } from "../../utils";
import { useEffect, useState } from "react";
import { AddressCard, FormModal } from "../../components";

const Profile = () => {
  const {
    state: {
      userDetails: { firstName, lastName, email },
    },
    dispatch,
  } = useAuthContext();
  const {
    state: { address, orderDetails },
  } = useAddressContext();
  const { dispatch: productDispatch } = useProductContext();
  const { showToast } = useCustomToast();
  const [toggle, setToggle] = useState("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (orderDetails.length) setToggle("orders");
  }, [orderDetails]);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "SET_TOKEN", payload: "" });
    dispatch({
      type: "SET_USER_DETAILS",
      payload: {},
    });
    productDispatch({
      type: "CLEAR_PRODUCT_STATE",
      payload: { cartItems: [], wishlistItem: [] },
    });
    showToast("You are logged out!");
  };

  const OrderItem = ({ item }) => {
    return (
      <div className="order-item">
        <img src={item.image} alt="image" className="order-image" />
        <div className="details-div">
          <p className="name">{item.name}</p>
          <p>
            <span>Price: </span>
            <span className="rupees-icon">₹ </span>
            {item.price}
          </p>
          <p>
            <span>Quantity: </span>
            {item.qty}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-box">
      <div className="profile-page">
        <div className="profile-section">
          <div className="nav">
            <p
              className={toggle === "profile" && "active-nav"}
              onClick={() => setToggle("profile")}
            >
              Profile
            </p>
            <p
              className={toggle === "address" && "active-nav"}
              onClick={() => setToggle("address")}
            >
              Address
            </p>
            <p
              className={toggle === "orders" && "active-nav"}
              onClick={() => setToggle("orders")}
            >
              Order Details
            </p>
          </div>
          <div className="content-area">
            {toggle === "profile" ? (
              <div className="profile-card">
                <div>
                  <p>
                    <span>Name: </span>
                    {firstName} {lastName}
                  </p>
                  <p>
                    <span>Email: </span> {email}
                  </p>
                </div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : toggle === "address" ? (
              <div>
                <button onClick={() => setIsModalOpen(true)}>
                  Add Address
                </button>
                {address.map((item) => (
                  <AddressCard key={item.id} item={item} isEdit />
                ))}
                <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
              </div>
            ) : toggle === "orders" ? (
              orderDetails.length ? (
                orderDetails.map((order) => (
                  <div key={order.paymentId} className="order-details">
                    <p>
                      <span>Payment ID: </span>
                      {order.paymentId}
                    </p>
                    <p>
                      <span>Address: </span>
                      {order.address}
                    </p>
                    <p>
                      <span>Amount: </span>
                      <span className="rupees-icon">₹ </span>
                      {order.amount}
                    </p>
                    <p>
                      <span>Mobile no: </span>
                      {order.mobile}
                    </p>
                    <p>
                      <span>Order items:</span>
                    </p>
                    {order.orderList?.map((item) => (
                      <OrderItem key={item._id} item={item} />
                    ))}
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center" }}>No order</p>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
