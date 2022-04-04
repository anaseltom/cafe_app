import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getCategories = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/category`)
      .then((res) => {
        dispatch(setCategoriesState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getCategoryById = (id) => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/category/${id}`)
      .then((res) => {
        dispatch(setCategoryForEditState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setCategoriesState = (data) => {
  return {
    type: "GET_CATEGORIES",
    data: data,
  };
};

const setCategoryForEditState = (data) => {
  return {
    type: "GET_CATEGORY",
    data: data,
  };
};
