const applyCategoryFilter = (products, categories) =>
  products.filter((prod) =>
    Object.entries(categories).some((cat) => cat[0] === prod.category && cat[1])
  );

const applyPriceFilter = (products, price) =>
  products.filter((prod) => prod.price < price);

const applyRatingFilter = (products, rating) =>
  products.filter((prod) => prod.rating >= Number(rating));

const applySortByFilter = (products, sortBy) =>
  products.sort((a, b) =>
    sortBy === "ascending" ? a.price - b.price : b.price - a.price
  );

export const handleFilters = (
  products,
  dispatch,
  categories,
  price,
  rating,
  sortBy
) => {
  let finalData = products;
  if (Object.entries(categories).some((item) => item[1])) {
    finalData = applyCategoryFilter(finalData, categories);
  }
  if (price) {
    finalData = applyPriceFilter(finalData, price);
  }
  if (rating) {
    finalData = applyRatingFilter(finalData, rating);
  }
  if (sortBy) {
    finalData = applySortByFilter(finalData, sortBy);
  }

  dispatch({
    type: "SET_FILTERED_PRODUCTS",
    payload: finalData,
  });
};
