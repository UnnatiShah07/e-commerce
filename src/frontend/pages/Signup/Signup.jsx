import "./signup.css";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { PasswordInput } from "../../components";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm password do not with password")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const navigate = useNavigate();

  const redirectToLogin = () => navigate("/login");

  return (
    <div className="signp-page">
      <div className="signup-card">
        <p className="heading">Signup</p>

        <Formik
          initialValues={{
            email: "",
            fname: "",
            lname: "",
            password: "",
            confirmPassword: "",
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
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      value={values.fname}
                      onChange={handleChange("fname")}
                      onBlur={handleBlur("fname")}
                    />
                    {errors.fname && touched.fname ? (
                      <p className="error-text">{errors.fname}</p>
                    ) : null}
                  </div>

                  <div className="last-name">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      value={values.lname}
                      onChange={handleChange("lname")}
                      onBlur={handleBlur("lname")}
                    />
                    {errors.lname && touched.lname ? (
                      <p className="error-text">{errors.lname}</p>
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
    </div>
  );
};

export default Signup;
