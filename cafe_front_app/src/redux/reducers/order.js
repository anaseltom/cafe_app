const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return (state = [...state, action.data]);
    case "DELETE_ORDER":
      return (state = []);
    case "UPDATE_ORDER":
      let index = action.data.findIndex(
        (elem) => elem.name_en == action.name_en
      );
      return (state = action.data.filter((elem, i) => {
        return i != index;
      }));
    default:
      return state;
  }
};

export default ordersReducer;
