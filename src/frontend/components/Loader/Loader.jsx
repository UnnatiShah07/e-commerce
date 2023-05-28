import { LoaderSvg } from "../../assets";
import "./loader.css"

const Loader = () => {
  return (
    <div className="spinner-container">
      <img src={LoaderSvg} alt="loading" style={{ width: 100, height: 100 }} />
    </div>
  );
};

export default Loader;
