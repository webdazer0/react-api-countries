import { API_URI } from "../constants";
import { APIv2Country, CountryDto } from "../models";
import { countryAdapter, countryListAdapter } from "../adapters/country.adapter";

// CORE
const callApi = async (url: string) => {
  const res = await fetch(url);
  // ADD VALIDATION & SERVER ERRORS HERE.
  // Example: status 404
  return res.json();
};

// SERVICES
export const getAll = async (): Promise<CountryDto[]> => {
  const countries: APIv2Country[] = await callApi(`${API_URI}/all`);
  return countryListAdapter(countries);
};

export const getBy = async (iso2: string): Promise<CountryDto> => {
  const country: APIv2Country = await callApi(`${API_URI}/alpha/${iso2}`);
  return countryAdapter(country);
};