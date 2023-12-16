import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  background: var(--background);
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  grid-gap: 2.3em; // 66px
  background: var(--background);
  padding: 3em 0em;
  // border: solid 1px red;
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

  const showCountries = useCallback(async () => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: data,
      });
    } catch (err) {
      //
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
