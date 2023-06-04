import { useNavigate } from "react-router-dom";
import { useAddressContext, useAuthContext } from "../../contexts";
import "./profile.css";
import { useCustomToast } from "../../utils";
import { useState } from "react";
import { AddressCard, FormModal } from "../../components";

const Profile = () => {
  const {
    state: {
      userDetails: { firstName, lastName, email },
    },
    dispatch,
  } = useAuthContext();
  const {
    state: { address },
  } = useAddressContext();
  const { showToast } = useCustomToast();
  const [toggle, setToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "SET_TOKEN", payload: "" });
    dispatch({
      type: "SET_USER_DETAILS",
      payload: {},
    });
    showToast("You are logged out!");
  };

  return (
    <div className="profile-box">
      <div className="profile-page">
        <div clastName="profile-section">
          <div className="nav">
            <p
              className={toggle && "active-nav"}
              onClick={() => setToggle(true)}
            >
              Profile
            </p>
            <p
              className={!toggle && "active-nav"}
              onClick={() => setToggle(false)}
            >
              Address
            </p>
          </div>
          <div className="content-area">
            {toggle ? (
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
            ) : (
              <div>
                <button onClick={() => setIsModalOpen(true)}>
                  Add Address
                </button>
                {address.map((item) => (
                  <AddressCard item={item} isEdit />
                ))}
                <FormModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
