const LastReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LAST_10_ORDERS":
      return (state = action.data);
    default:
      return state;
  }
};

export default LastReducer;
