import "./passwordInput.css";
import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const PasswordInput = (props) => {
  const { value, onChange, onBlur } = props;
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="icon-input">
      <input
        type={showPwd ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="icon" onClick={() => setShowPwd(!showPwd)}>
        {showPwd ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
      </div>
    </div>
  );
};

export default PasswordInput;
