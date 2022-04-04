import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getDay = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/dashboard/day`)
      .then((res) => {
        dispatch(setDayState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setDayState = (data) => {
  return {
    type: "GET_DAY",
    data: data,
  };
};
