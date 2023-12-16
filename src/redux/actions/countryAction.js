import { countryType } from "../redux-constants";

export const loadCountriesAction = (data) => {
  return {
    type: countryType.INIT,
    payload: data,
  };
};

export const filterByRegionAction = (regionSelected) => {
  return {
    type: countryType.FILTER_BY_REGION,
    payload: { regionSelected },
  };
};

export const filterByNameAction = (name) => {
  return {
    type: countryType.FILTER_BY_NAME,
    payload: { name },
  };
};
