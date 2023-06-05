import "./login.css";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Loader, PasswordInput } from "../../components";
import { handleLogin } from "../../apiServices";
import { useCustomToast } from "../../utils";
import { useAuthContext } from "../../contexts/authContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const { showToast } = useCustomToast();

  const redirectToSignup = () => navigate("/signup");

  const loginUser = (values) => {
    setLoading(true);
    handleLogin(values)
      .then((response) => {
        setLoading(false);
        const {
          encodedToken,
          foundUser: { firstName, lastName, email, _id },
        } = response;
        localStorage.setItem("token", encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify({ firstName, lastName, email, _id })
        );
        dispatch({ type: "SET_TOKEN", payload: encodedToken });
        dispatch({
          type: "SET_USER_DETAILS",
          payload: { firstName, lastName, email, _id },
        });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        showToast(error.message, "error");
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <p className="heading">Login</p>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => loginUser(values)}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <>
              <div className="input-container">
                <label htmlFor="username">Email Address</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email ? (
                  <p className="error-text">{errors.email}</p>
                ) : null}
                <label htmlFor="username">Password</label>
                <PasswordInput
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                {errors.password && touched.password ? (
                  <p className="error-text">{errors.password}</p>
                ) : null}
              </div>
              {/* <p className="forgot">Forgot your password?</p> */}
              <div className="btn-container">
                <button onClick={handleSubmit}>Login</button>
                <button
                  onClick={() =>
                    loginUser({
                      email: "unnati@gmail.com",
                      password: "12345678",
                    })
                  }
                >
                  Login as a Guest
                </button>
                <p onClick={redirectToSignup}>
                  Create new account{" "}
                  <MdArrowForwardIos className="arrow-icon" />
                </p>
              </div>
            </>
          )}
        </Formik>
      </div>
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;
