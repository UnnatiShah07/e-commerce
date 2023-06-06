import { Formik } from "formik";
import * as Yup from "yup";
import { useAddressContext } from "../../contexts";
import "./formModal.css";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  pincode: Yup.string().required("Pincode is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  mobile: Yup.string()
    .min(10, "Mobile number must be of length 10")
    .required("Mobile number is required"),
});

const FormModal = ({ isOpen, setIsOpen, editValues, isEdit }) => {
  const {
    state: { inputAddress, address },
    dispatch,
  } = useAddressContext();
  const formRef = useRef();

  const setDummyData = () => {
    formRef.current.setValues(inputAddress);
  };

  const addAddress = (values) => {
    if (isEdit) {
      const newAddress = address.map((addr) =>
        addr.id === editValues.id ? { id: editValues.id, ...values } : addr
      );
      dispatch({
        type: "SET_ADDRESS",
        payload: newAddress,
      });
    } else {
      dispatch({
        type: "SET_ADDRESS",
        payload: [...address, { id: address.length + 1, ...values }],
      });
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">Add new address</p>
          <RxCross2 size={20} onClick={() => setIsOpen(false)} />
        </div>
        <Formik
          initialValues={{
            name: editValues?.name ?? "",
            street: editValues?.street ?? "",
            city: editValues?.city ?? "",
            pincode: editValues?.pincode ?? "",
            state: editValues?.state ?? "",
            country: editValues?.country ?? "",
            mobile: editValues?.mobile ?? "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => addAddress(values)}
          innerRef={formRef}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <>
              <div className="modal-area">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange("name")}
                  required
                />
                {errors.name && touched.name && (
                  <p className="error-text">{errors.name}</p>
                )}
                <input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Street"
                  value={values.street}
                  onChange={handleChange("street")}
                  required
                />
                {errors.street && touched.street && (
                  <p className="error-text">{errors.street}</p>
                )}
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  value={values.city}
                  onChange={handleChange("city")}
                  required
                />
                {errors.city && touched.city && (
                  <p className="error-text">{errors.city}</p>
                )}
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pincode"
                  value={values.pincode}
                  onChange={handleChange("pincode")}
                  required
                />
                {errors.pincode && touched.pincode && (
                  <p className="error-text">{errors.pincode}</p>
                )}
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  value={values.state}
                  onChange={handleChange("state")}
                  required
                />
                {errors.state && touched.state && (
                  <p className="error-text">{errors.state}</p>
                )}
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  value={values.country}
                  onChange={handleChange("country")}
                  required
                />
                {errors.country && touched.country && (
                  <p className="error-text">{errors.country}</p>
                )}
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile no"
                  value={values.mobile}
                  onChange={handleChange("mobile")}
                  required
                />
                {errors.mobile && touched.mobile && (
                  <p className="error-text">{errors.mobile}</p>
                )}
              </div>
              <div className="btn-container">
                {isEdit ? (
                  <button onClick={handleSubmit}>Save</button>
                ) : (
                  <button onClick={handleSubmit}>Add</button>
                )}
                <button onClick={setDummyData}>Fill Dummuy data</button>
              </div>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormModal;
