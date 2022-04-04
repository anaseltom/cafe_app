const LastReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_DAY":
      return (state = action.data);
    default:
      return state;
  }
};

export default LastReducer;
