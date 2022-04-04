const YearReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_YEAR":
      return (state = action.data);
    default:
      return state;
  }
};

export default YearReducer;
