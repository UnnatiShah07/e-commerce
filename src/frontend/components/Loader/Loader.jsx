import { LoaderSvg } from "../../assets";
import "./loader.css"

const Loader = () => {
  return (
    <div className="spinner-container">
      <img src={LoaderSvg} alt="loading" style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Loader;
