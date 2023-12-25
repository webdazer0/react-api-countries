import { CountryDto, CountryFilters, emptyCountryState } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "Country",
  initialState: emptyCountryState,
  reducers: {
    loadCountries: (state, action: PayloadAction<CountryDto[]>) => {
      return {
        ...emptyCountryState,
        rawCountries: action.payload,
        countries: action.payload,
      };
    },
    filterCountriesByRegion: (state, action: PayloadAction<string>) => {
      const filters = { ...state.filters, byRegion: action.payload }; // BY REGION

      const countries = applyFilters(state.rawCountries, filters);

      return { ...state, countries, filters };
    },
    filterCountriesByName: (state, action: PayloadAction<string>) => {
      const filters = { ...state.filters, byName: action.payload }; // BY NAME

      const countries = applyFilters(state.rawCountries, filters);

      return { ...state, countries, filters };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadCountries, filterCountriesByRegion, filterCountriesByName } =
  countrySlice.actions;

// APPLY FILTERS
const applyFilters = (countries: CountryDto[], filter: CountryFilters) => {
  const countriesByRegion = _filterByRegion(countries, filter.byRegion);
  const countriesByName = _filterByName(countriesByRegion, filter.byName);
  return countriesByName;
};

function _filterByRegion(countries: CountryDto[], filter: string) {
  if (filter === "") return countries;
  return countries.filter(({ region }) => region === filter).sort(orderDesc);
}

function _filterByName(countries: CountryDto[], filter: string) {
  if (filter === "") return countries;
  return countries
    .filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()))
    .sort(orderDesc);
}

const orderDesc = (a: CountryDto, b: CountryDto) =>
  b.population! - a.population!;
// const orderAsc = (a, b) => a.population - b.population;
