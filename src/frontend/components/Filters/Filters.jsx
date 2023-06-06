import { useEffect } from "react";
import { useFilterContext } from "../../contexts/filterContext";
import { useProductContext } from "../../contexts/productContext";
import "./filters.css";
import { handleFilters } from "../../utils";

const Filters = () => {
  const {
    state: { categories, price, rating, sortBy, searchText },
    dispatch,
  } = useFilterContext();
  const {
    state: { products },
    dispatch: productDispatch,
  } = useProductContext();

  useEffect(() => {
    handleFilters(
      products,
      productDispatch,
      categories,
      price,
      rating,
      sortBy,
      searchText
    );
  }, [
    price,
    categories,
    rating,
    sortBy,
    searchText,
    productDispatch,
    products,
  ]);

  const updateCategoriesValue = (field, value) =>
    dispatch({
      type: "SET_CATEGORIES_TYPE",
      payload: { [field]: value },
    });

  const updatePriceValue = (value) =>
    dispatch({ type: "SET_PRICE", payload: value });

  const updateRating = (value) =>
    dispatch({ type: "SET_RATING", payload: value });

  const updateSortType = (value) =>
    dispatch({ type: "SET_SORT_TYPE", payload: value });

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    productDispatch({ type: "SET_FILTERED_PRODUCTS", payload: products });
  };

  return (
    <>
      <div className="heading-row">
        <p>Filters</p>
        <button onClick={clearFilter}>Clear</button>
      </div>

      <div className="price-container">
        <p>Price</p>
        <div className="label-container">
          <p>170</p>
          <p>{price}</p>
          <p>2500</p>
        </div>
        <input
          type="range"
          min={170}
          max={2500}
          value={price}
          onChange={(e) => updatePriceValue(e.target.value)}
          style={{ width: "250px" }}
        />
      </div>

      <div className="section">
        <p>Category</p>
        <label>
          <input
            type="checkbox"
            name="Air Plant"
            checked={categories.airPlant}
            onChange={(e) =>
              updateCategoriesValue("airPlant", e.target.checked)
            }
          />{" "}
          Air Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Flowering Plant"
            checked={categories.floweringPlant}
            onChange={(e) =>
              updateCategoriesValue("floweringPlant", e.target.checked)
            }
          />{" "}
          Flowering Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Climbers"
            checked={categories.climbers}
            onChange={(e) =>
              updateCategoriesValue("climbers", e.target.checked)
            }
          />{" "}
          Climbers
        </label>
        <label>
          <input
            type="checkbox"
            name="Fruit Plant"
            checked={categories.fruitPlant}
            onChange={(e) =>
              updateCategoriesValue("fruitPlant", e.target.checked)
            }
          />{" "}
          Fruit Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Ground Covers"
            checked={categories.groundCovers}
            onChange={(e) =>
              updateCategoriesValue("groundCovers", e.target.checked)
            }
          />{" "}
          Ground Covers
        </label>
        <label>
          <input
            type="checkbox"
            name="Hanging Basket Plants"
            checked={categories.hangingBasketPlant}
            onChange={(e) =>
              updateCategoriesValue("hangingBasketPlant", e.target.checked)
            }
          />{" "}
          Hanging Basket Plants
        </label>
        <label>
          <input
            type="checkbox"
            name="Indoor"
            checked={categories.indoors}
            onChange={(e) => updateCategoriesValue("indoors", e.target.checked)}
          />{" "}
          Indoor
        </label>
        <label>
          <input
            type="checkbox"
            name="Cacti & Succulents"
            checked={categories.cactiSucculents}
            onChange={(e) =>
              updateCategoriesValue("cactiSucculents", e.target.checked)
            }
          />{" "}
          Cacti & Succulents
        </label>
      </div>

      <div className="section">
        <p>Rating</p>
        <label>
          <input
            type="radio"
            name="rating4"
            value="4"
            checked={rating === "4"}
            onChange={(e) => updateRating(e.target.value)}
          />{" "}
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating3"
            value="3"
            checked={rating === "3"}
            onChange={(e) => updateRating(e.target.value)}
          />{" "}
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating2"
            value="2"
            checked={rating === "2"}
            onChange={(e) => updateRating(e.target.value)}
          />{" "}
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating1"
            value="1"
            checked={rating === "1"}
            onChange={(e) => updateRating(e.target.value)}
          />{" "}
          1 Stars & above
        </label>
      </div>

      <div className="section">
        <p>Sort by</p>
        <label>
          <input
            type="radio"
            name="ascending"
            value="ascending"
            checked={sortBy === "ascending"}
            onChange={() => updateSortType("ascending")}
          />{" "}
          Price - Low to high
        </label>
        <label>
          <input
            type="radio"
            name="descending"
            value="descending"
            checked={sortBy === "descending"}
            onChange={() => updateSortType("descending")}
          />{" "}
          Price - High to low
        </label>
      </div>
    </>
  );
};

export default Filters;
