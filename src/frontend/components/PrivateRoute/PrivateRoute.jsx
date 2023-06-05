import { Navigate } from "react-router";
import { useAuthContext } from "../../contexts";

const PrivateRoute = ({ children }) => {
  const {
    state: { token },
  } = useAuthContext();

  return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
