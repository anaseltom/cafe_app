import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getWeek = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/dashboard/week`)
      .then((res) => {
        dispatch(setWeekState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setWeekState = (data) => {
  return {
    type: "GET_LAST_WEEK",
    data,
  };
};
