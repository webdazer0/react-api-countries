import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const params = useParams();
  const countries = useSelector((state) => state.countryReducer.countries);

  const countryFilter = countries.filter((el) =>
    el.name.toLowerCase().startsWith(params.id.toLowerCase())
  );
  const country = countryFilter[0];
  console.log("country => ", country);

  return (
    <>
      <h2>CountryPage: {country.name}</h2>
    </>
  );
};
