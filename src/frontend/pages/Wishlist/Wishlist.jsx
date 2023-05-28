import "./wishlist.css";
import { useProductContext } from "../../contexts";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const Wishlist = () => {
  const {
    state: { wishlistItem },
  } = useProductContext();
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">
      <p className="heading">My Wishlist</p>
      {wishlistItem.length ? (
        <div className="list-container">
          {wishlistItem.map((item) => (
            <ProductCard key={item.id} item={item} isLike isMoveToCart />
          ))}
        </div>
      ) : (
        <>
          <p className="empty">Your wishlist is empty!</p>
          <button className="btn-margin" onClick={() => navigate("/products")}>
            <IoArrowBack size={20} />
            <p>Go to products</p>
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
