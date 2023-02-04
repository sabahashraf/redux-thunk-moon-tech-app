import {
  CLEAR_FILTER,
  SEARCH_INPUT_CHANGE,
  TOGGLE_BRAND,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

export const toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
export const searchInputChange = (value) => {
  return {
    type: SEARCH_INPUT_CHANGE,
    payload: value,
  };
};
