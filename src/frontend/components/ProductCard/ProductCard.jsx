import "./productCard.css";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card" key={item.id}>
      <div>
        <div style={{ overflow: "hidden",height:"250px" }}>
          <img className="product-image" src={item.image} alt="plantPhoto" />
        </div>
        <p className="product-text">{item.name}</p>
        <div className="discount">-{item.discount}%</div>
      </div>

      <div>
        <Rating
          initialValue={item.rating}
          allowFraction
          fillIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
          emptyIcon={<FaStar size={20} style={{ marginRight: "2px" }} />}
          allowHover={false}
        />
        <p className="price">
          <span className="old-price">
            <span className="rupees-icon">₹ </span>
            {item.prevPrice}
          </span>
          <span className="rupees-icon"> ₹ </span>
          {item.price}
        </p>
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
