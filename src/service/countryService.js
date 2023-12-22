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

export const getBy = async (iso2) => {
  const countries = await callApi(`${API_URI}/alpha/${iso2}`);
  const allData = countryListAdapter(countries);
  console.log({ allData });
  return allData.find(
    ({ code }) => code.iso2.toLowerCase() === iso2.toLowerCase()
  );
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
    //
    subregion: countryApi.subregion,
    borders: countryApi.borders,
    domain: countryApi.topLevelDomain,
    currencies: countryApi.currencies, // code, name, symbol
    languages: countryApi.languages,
  };
};
