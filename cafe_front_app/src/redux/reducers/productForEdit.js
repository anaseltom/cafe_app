const productForEditReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return (state = action.data);
    default:
      return state;
  }
};

export default productForEditReducer;
