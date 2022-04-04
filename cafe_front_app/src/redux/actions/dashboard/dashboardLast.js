import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getLast = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/dashboard/orders`)
      .then((res) => {
        dispatch(setLastOrdersState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setLastOrdersState = (data) => {
  return {
    type: "GET_LAST_10_ORDERS",
    data: data,
  };
};
