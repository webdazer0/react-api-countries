function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST":
      console.log("aggiornando dati countrylist");
      return { ...state, CountryList: action.payload };
    case "FILTER_BY_REGION": {
      const { regionSelected } = action.payload;
      if (regionSelected === "") {
        return { ...state, CountryListByRegion: [], filterByRegion: "" };
      }
      const CountryListByRegion = state.CountryList.filter(
        ({ region }) => region === regionSelected
      );
      return { ...state, CountryListByRegion, filterByRegion: regionSelected };
    }
    case "FILTER_BY_NAME": {
      if (action.payload === "") {
        return { ...state, CountryListByName: [], filterByName: "" };
      }
      const CountryListByName = state.CountryList.filter(({ name }) =>
        name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
      return { ...state, CountryListByName, filterByName: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
