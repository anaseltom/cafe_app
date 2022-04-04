const weekReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LAST_WEEK":
      return (state = action.data);
    default:
      return state;
  }
};

export default weekReducer;
