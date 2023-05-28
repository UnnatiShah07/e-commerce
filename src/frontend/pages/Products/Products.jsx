import { Filters, ProductCard } from "../../components";
import { useProductContext } from "../../contexts";
import "./products.css";

const Products = () => {
  const {
    state: { products },
    dispatch,
  } = useProductContext();

  return (
    <div className="products">
      <div className="filters">
        <Filters />
      </div>
      <div className="product-list">
        {products.map((image) => (
          <ProductCard key={image.id} item={image} isLike isAddToCart isProduct />
        ))}
      </div>
    </div>
  );
};

export default Products;
