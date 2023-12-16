import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";
import * as countryService from "../service/countryService";
import { loadCountriesAction } from "../country-actions";

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
  console.log("✅ CountryList BUILDING");
  const dispatch = useDispatch();
  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "") {
      return state.countryListByRegion;
    }
    if (state.filterByName.length > 0) {
      return state.countryListByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    const showCountries = async () => {
      try {
        const data = await countryService.getAll();
        console.log("data json => ", data);
        dispatch(loadCountriesAction(data));
      } catch (err) {
        //
      }
    };

    showCountries();
  }, [dispatch]);

  if (!countryList) {
    <Wrapper>
      <CountryListStyled>
        <p>Loading...</p>
      </CountryListStyled>
    </Wrapper>;
  }

  return (
    <Wrapper>
      <CountryListStyled>
        {countryList.map(
          ({ flag, name, population, region, capital }, index) => {
            return (
              <Country
                key={`country${index}`}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
