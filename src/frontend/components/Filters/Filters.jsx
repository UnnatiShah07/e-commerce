import "./filters.css";

const Filters = () => {
  return (
    <>
      <div className="heading-row">
        <p>Filters</p>
        <button>Clear</button>
      </div>

      <div className="price-container">
        <p>Price</p>
        <div className="label-container">
          <p>0</p>
          <p>1250</p>
          <p>2500</p>
        </div>
        <input
          type="range"
          min={0}
          max={2500}
          value={1250}
          onChange={(e) => console.log(e.target.value)}
          style={{ width: "250px" }}
        />
      </div>

      <div className="section">
        <p>Category</p>
        <label>
          <input
            type="checkbox"
            name="Air Plant"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Air Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Flowering Plant"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Flowering Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Climbers"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Climbers
        </label>
        <label>
          <input
            type="checkbox"
            name="Fruit Plant"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Fruit Plant
        </label>
        <label>
          <input
            type="checkbox"
            name="Ground Covers"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Ground Covers
        </label>
        <label>
          <input
            type="checkbox"
            name="Hanging Basket Plants"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Hanging Basket Plants
        </label>
        <label>
          <input
            type="checkbox"
            name="Indoor"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Indoor
        </label>
        <label>
          <input
            type="checkbox"
            name="Cacti & Succulents"
            // checked={isSpicy}
            // onChange={(e) => setIsSpicy(e.target.checked)}
          />{" "}
          Cacti & Succulents
        </label>
      </div>

      <div className="section">
        <p>Rating</p>
        <label>
          <input
            type="radio"
            name="ascending"
            // value="ascending"
            // checked={sortOrder === "ascending"}
            // onChange={handleSort}
          />{" "}
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="ascending"
            // value="ascending"
            // checked={sortOrder === "ascending"}
            // onChange={handleSort}
          />{" "}
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="ascending"
            // value="ascending"
            // checked={sortOrder === "ascending"}
            // onChange={handleSort}
          />{" "}
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="ascending"
            // value="ascending"
            // checked={sortOrder === "ascending"}
            // onChange={handleSort}
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
        //   value="ascending"
        //   checked={sortOrder === "ascending"}
        //   onChange={handleSort}
        />{" "}
        Price - Low to high
      </label>
      <label>
        <input
          type="radio"
          name="descending"
        //   value="descending"
        //   checked={sortOrder === "descending"}
        //   onChange={handleSort}
        />{" "}
        Price - High to low
      </label>
      </div>
    </>
  );
};

export default Filters;
