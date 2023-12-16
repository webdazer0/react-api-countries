import { API_URI } from "../constants";

// CORE
const callApi = async (url) => {
  const res = await fetch(url);
  // ADD VALIDATION & SERVER ERRORS HERE.
  // Example: status 404
  return res.json();
};

// SERVICES
/**
 *
 * @returns {Promise<CountryDTO[]>}
 */
export const getAll = async () => {
  const countries = await callApi(`${API_URI}/all`);
  return countryListAdapter(countries);
};

// ADAPTERS
/**
 *
 * @param {CountryAPI[]} countriesApi
 * @returns {CountryDTO[]}
 */
const countryListAdapter = (countriesApi) => {
  return countriesApi.map((countryApi) => countryAdapter(countryApi));
};
/**
 *
 * @param {CountryAPI} countryApi
 * @returns {CountryDTO}
 */
const countryAdapter = (countryApi) => {
  return {
    name: countryApi.name,
    nativeName: countryApi.nativeName,
    capital: countryApi.capital,
    population: countryApi.population,
    region: countryApi.region,
    flag: countryApi.flag,
    code: {
      cioc: countryApi.cioc,
      iso3: countryApi.alpha3Code,
      iso2: countryApi.alpha2Code,
    },
  };
};
