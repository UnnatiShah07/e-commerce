import { useLocation } from "react-router-dom";
import "./productDetail.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

const ProductDetail = () => {
  const {
    state: { item },
  } = useLocation();

  return (
    <div className="product-detail">
      <div className="card">
        <div className="image-container">
          <img src={item.image} alt="" />
        </div>
        <div className="details">
          <h2>{item.name}</h2>
          <p className="desc">{item.description}</p>
          <p className="price">
            <span className="old-price">
              <span className="rupees-icon">₹ </span>
              {item.prevPrice}
            </span>
            <span className="rupees-icon"> ₹ </span>
            {item.price}
            <span className="off-price">- {item.discount}%</span>
          </p>
          <div className="rating-container">
            <Rating
              initialValue={item.rating}
              allowFraction
              fillIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              emptyIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
              allowHover={false}
            />
            <p>{item.rating}</p>
          </div>
          <div className="btn-container">
            <button>Add to Cart</button>
            <button>Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
