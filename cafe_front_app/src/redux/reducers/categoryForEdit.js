const categoryForEditReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return (state = action.data);
    default:
      return state;
  }
};

export default categoryForEditReducer;
