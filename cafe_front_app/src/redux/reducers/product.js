const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return (state = action.data);
    default:
      return state;
  }
};

export default productsReducer;
