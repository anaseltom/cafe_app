const userReducer = (state = [], action) => {
  switch (action.type) {
    case "login":
      return state + 1;
    default:
      return state + 1;
  }
};
