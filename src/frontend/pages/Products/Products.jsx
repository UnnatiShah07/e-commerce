import { Filters, ProductCard } from "../../components";
import { useProductContext } from "../../contexts";
import "./products.css";

const Products = () => {
  const {
    state: { filteredProducts },
  } = useProductContext();

  return (
    <div className="products">
      <div className="filters">
        <Filters />
      </div>
      <div className="product-list">
        {filteredProducts.length ? (
          filteredProducts.map((image) => (
            <ProductCard
              key={image.id}
              item={image}
              isLike
              isAddToCart
              isProduct
            />
          ))
        ) : (
          <p>No match found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
