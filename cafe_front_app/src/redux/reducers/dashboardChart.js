const chartReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CHART":
      return (state = action.data);
    default:
      return state;
  }
};

export default chartReducer;
