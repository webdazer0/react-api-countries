import { countryType } from "../redux-constants";

export const loadCountriesAction = (data) => {
  return {
    type: countryType.INIT,
    payload: data,
  };
};

export const filterByRegionAction = (filter) => {
  return {
    type: countryType.FILTER_BY_REGION,
    payload: filter,
  };
};

export const filterByNameAction = (filter) => {
  return {
    type: countryType.FILTER_BY_NAME,
    payload: filter,
  };
};
