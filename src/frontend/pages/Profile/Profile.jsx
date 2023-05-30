import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";
import "./profile.css";
import { useCustomToast } from "../../utils";

const Profile = () => {
  const {
    state: {
      userDetails: { firstName, lastName },
    },
    dispatch,
  } = useAuthContext();
  const { showToast } = useCustomToast();

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
    <div className="profile-page">
      <div className="profile-card">
        <p>
          <span>Welcome! </span>
          {firstName} {lastName}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
