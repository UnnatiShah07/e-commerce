import "./login.css";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { PasswordInput } from "../../components";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const redirectToSignup = () => navigate("/signup");

  return (
    <div className="login-page">
      <div className="login-card">
        <p className="heading">Login</p>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
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
              <p className="forgot">Forgot your password?</p>
              <div className="btn-container">
                <button onClick={handleSubmit}>Login</button>
                <p onClick={redirectToSignup}>
                  Create new account{" "}
                  <MdArrowForwardIos className="arrow-icon" />
                </p>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
