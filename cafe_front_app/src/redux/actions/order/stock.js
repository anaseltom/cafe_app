import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getStock = (time) => {
  let stockDate;
  switch (time) {
    case 1:
      stockDate = "day";
      break;
    case 2:
      stockDate = "week";
      break;
    case 3:
      stockDate = "month";
      break;
    default:
      stockDate = "day";
  }

  return (dispatch) => {
    return axios
      .get(`${apiURL}/stock/${stockDate}`)
      .then((res) => {
        dispatch(setStockState(res.data));
        console.log(stockDate);
      })
      .catch((err) => console.log(err));
  };
};

const setStockState = (data) => {
  return {
    type: "GET_STOCK",
    data: data,
  };
};
