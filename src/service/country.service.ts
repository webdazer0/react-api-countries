import { countryAdapter, countryListAdapter } from "@/adapters/country.adapter";
import { API_URI } from "@/config";
import { mockData } from "@/mockData";
import { APIv2Country, CountryDto } from "@/models";

// CORE
const callApi = async (url: string) => {
  const res = await fetch(url);
  // ADD VALIDATION & SERVER ERRORS HERE.
  // Example: status 404
  return res.json();
};

// SERVICES
export const getAll = async (): Promise<CountryDto[]> => {
  // const countries: APIv2Country[] = await callApi(`${API_URI}/all`);
  const countries: APIv2Country[] = mockData;
  return countryListAdapter(countries);
};

export const getBy = async (iso2: string): Promise<CountryDto | undefined> => {
  try {
    const country: APIv2Country = await callApi(`${API_URI}/alpha/${iso2}`);
    return countryAdapter(country);
  } catch (error) {
    const countries: APIv2Country[] = mockData;
    const allData: CountryDto[] = countryListAdapter(countries);
    console.log({ allData });
    return allData.find(
      ({ code }) => code.iso2.toLowerCase() === iso2.toLowerCase()
    );
  }
};
