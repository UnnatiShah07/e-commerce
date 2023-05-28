import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useCustomToast = () => {
  const [toastId, setToastId] = useState(null);

  const showToast = (message, type = "info", options = {}) => {
    if (toastId) {
      toast.dismiss(toastId);
    }

    const newToastId = toast[type](message, {
      ...options,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
    setToastId(newToastId);
  };

  // const dismissToast = () => {
  //   if (toastId) {
  //     toast.dismiss(toastId);
  //     setToastId(null);
  //   }
  // };

  return { showToast };
};

export default useCustomToast;
