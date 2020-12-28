import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  // grid-template-columns: 1fr 1fr 1fr;
  background: var(--background);
  padding: 4em 2em;
  // border: solid 1px red;
  justify-content: center;
`;
function CountryList() {
  const dispatch = useDispatch();
  const CountryList = useSelector((state) => {
    if (state.filterByRegion !== "") {
      return state.CountryListByRegion;
    }
    if (state.filterByName.length > 0) {
      return state.CountryListByName;
    }

    return state.CountryList;
  });
  console.log("lo stato della mia app è: ", CountryList);
  // const [CountryList, setCountryList] = useState([]);

  const showCountries = useCallback(async () => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: data,
      });
      console.log(data.length);
    } catch (err) {
      console.log("Something went wrong!!!");
    }
  }, [dispatch]);

  useEffect(() => {
    showCountries();
  }, [showCountries]);

  return (
    <Wrapper>
      <CountryListStyled>
        {!CountryList ? (
          <p>Loading...</p>
        ) : (
          CountryList.map(({ flag, name, population, region, capital }) => {
            return (
              <Country
                key={name}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            );
          })
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
