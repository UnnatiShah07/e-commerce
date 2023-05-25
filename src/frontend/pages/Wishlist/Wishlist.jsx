import "./wishlist.css";
import { useProductContext } from "../../contexts";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const {
    state: { wishlistItem },
  } = useProductContext();
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">
      <p className="heading">My Wishlist</p>
      {wishlistItem.length ? (
        <></>
      ) : (
        <>
          <p className="empty">Your wishlist is empty!</p>
          <button onClick={() => navigate("/products")}>
            <IoArrowBack size={20} />
            <p>Go to products</p>
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
