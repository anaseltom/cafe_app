import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getYear = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/dashboard/year`)
      .then((res) => {
        dispatch(setYearState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setYearState = (data) => {
  return {
    type: "GET_YEAR",
    data,
  };
};
