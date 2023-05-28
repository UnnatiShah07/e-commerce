import "./signup.css";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { Loader, PasswordInput } from "../../components";
import { handleSignup } from "../../apiServices";
import { useAuthContext } from "../../contexts/authContext";
import { useCustomToast } from "../../utils";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm password do not with password")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const { showToast } = useCustomToast();

  const redirectToLogin = () => navigate("/login");

  const registerNewUser = (values) => {
    setIsLoading(true);
    const { email, firstName, lastName, password } = values;
    handleSignup({ email, firstName, lastName, password })
      .then((response) => {
        setIsLoading(false);
        const {
          encodedToken,
          createdUser: { firstName, lastName, email, _id },
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
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        showToast(err.message, "error");
      });
  };

  return (
    <div className="signp-page">
      <div className="signup-card">
        <p className="heading">Signup</p>

        <Formik
          initialValues={{
            email: "hello@mailinator.com",
            firstName: "Hello",
            lastName: "User",
            password: "12345678",
            confirmPassword: "12345678",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => registerNewUser(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <div className="input-container">
                <label htmlFor="username">Email Address</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {errors.email && touched.email ? (
                  <p className="error-text">{errors.email}</p>
                ) : null}

                <div className="name-div">
                  <div className="first-name">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                    />
                    {errors.firstName && touched.firstName ? (
                      <p className="error-text">{errors.firstName}</p>
                    ) : null}
                  </div>

                  <div className="last-name">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                    />
                    {errors.lastName && touched.lastName ? (
                      <p className="error-text">{errors.lastName}</p>
                    ) : null}
                  </div>
                </div>

                <label htmlFor="password">Password</label>
                <PasswordInput
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                {errors.password && touched.password ? (
                  <p className="error-text">{errors.password}</p>
                ) : null}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <PasswordInput
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="error-text">{errors.confirmPassword}</p>
                ) : null}
              </div>

              <div className="btn-container">
                <button type="submit" onClick={handleSubmit}>
                  Create new account
                </button>
                <p onClick={redirectToLogin}>
                  Already have an account{" "}
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

export default Signup;
