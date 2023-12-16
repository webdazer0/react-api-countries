import { countryType } from "../redux-constants";
const initialState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
  filterByName: "",
  filterByRegion: "",
};

function countryReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    // case "SET_COUNTRY_LIST":
    case countryType.INIT:
      return { ...state, countryList: action.payload };
    // case "FILTER_BY_REGION": {
    case countryType.FILTER_BY_REGION: {
      const { regionSelected } = action.payload;
      if (regionSelected === "") {
        return { ...state, countryListByRegion: [], filterByRegion: "" };
      }
      const countryListByRegion = state.countryList.filter(
        ({ region }) => region === regionSelected
      );
      return { ...state, countryListByRegion, filterByRegion: regionSelected };
    }
    // case "FILTER_BY_NAME": {
    case countryType.FILTER_BY_NAME: {
      if (action.payload === "") {
        return { ...state, countryListByName: [], filterByName: "" };
      }
      const countryListByName = state.countryList.filter(({ name }) =>
        name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
      return { ...state, countryListByName, filterByName: action.payload };
    }
    default:
      return state;
  }
}

export default countryReducer;
