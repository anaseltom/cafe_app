export const addOrder = (data) => {
  return {
    type: "ADD_ORDER",
    data: data,
  };
};

export const deleteOrder = () => {
  return {
    type: "DELETE_ORDER",
  };
};

export const updateOrder = (data, name_en) => {
  return {
    type: "UPDATE_ORDER",
    data,
    name_en,
  };
};
