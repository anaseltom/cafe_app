const stockReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STOCK":
      return (state = action.data);
    default:
      return state;
  }
};

export default stockReducer;
