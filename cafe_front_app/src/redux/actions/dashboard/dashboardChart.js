import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getChart = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/dashboard/chart`)
      .then((res) => {
        dispatch(setChartState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setChartState = (data) => {
  return {
    type: "GET_CHART",
    data: data,
  };
};
