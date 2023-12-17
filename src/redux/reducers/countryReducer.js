import { countryType } from "../redux-constants";
const emptyCountryState = {
  rawCountries: [],
  countries: [],
  filters: {
    byName: "",
    byRegion: "",
  },
};

function countryReducer(state = emptyCountryState, action) {
  // console.log(action);
  switch (action.type) {
    case countryType.INIT: {
      return {
        ...emptyCountryState,
        rawCountries: action.payload,
        countries: action.payload,
      };
    }

    case countryType.FILTER_BY_REGION: {
      const filters = { ...state.filters, byRegion: action.payload }; // BY REGION

      const countries = applyFilters(state.rawCountries, filters);

      return { ...state, countries, filters };
    }

    case countryType.FILTER_BY_NAME: {
      const filters = { ...state.filters, byName: action.payload }; // BY NAME

      const countries = applyFilters(state.rawCountries, filters);

      return { ...state, countries, filters };
    }
    default:
      return state;
  }
}

export default countryReducer;

// APPLY FILTERS

const applyFilters = (countries, filter) => {
  console.log({ filter });
  const countriesByRegion = filterByRegion(countries, filter.byRegion);
  const countriesByName = filterByName(countriesByRegion, filter.byName);
  return countriesByName;
};

function filterByRegion(countries, filter) {
  if (filter === "") return countries;
  return countries.filter(({ region }) => region === filter).sort(orderDesc);
}

function filterByName(countries, filter) {
  if (filter === "") return countries;
  return countries
    .filter(({ name }) => name.toLowerCase().startsWith(filter.toLowerCase()))
    .sort(orderDesc);
}

const orderDesc = (a, b) => b.population - a.population;
// const orderAsc = (a, b) => a.population - b.population;
