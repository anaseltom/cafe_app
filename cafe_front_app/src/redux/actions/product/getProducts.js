import { apiURL } from "../../../config.json";
const axios = require("axios");

export const getProducts = () => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/product`)
      .then((res) => {
        dispatch(setProductsState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getProductsByCategory = (id) => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/product/cat/${id}`)
      .then((res) => {
        dispatch(setProductsState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getProductById = (id) => {
  return (dispatch) => {
    return axios
      .get(`${apiURL}/product/${id}`)
      .then((res) => {
        dispatch(setProductForEditState(res.data));
      })
      .catch((err) => console.log(err));
  };
};

const setProductsState = (data) => {
  return {
    type: "GET_PRODUCTS",
    data: data,
  };
};

const setProductForEditState = (data) => {
  return {
    type: "GET_PRODUCT",
    data: data,
  };
};
