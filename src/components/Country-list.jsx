import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";
import * as countryService from "../service/countryService";
import { loadCountriesAction } from "../redux/actions/countryAction";

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
  const countries = useSelector((state) => state.countryReducer.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    const showCountries = async () => {
      try {
        const data = await countryService.getAll();
        console.log("data json => ", data);
        dispatch(loadCountriesAction(data));
      } catch (error) {
        console.log("error json => ", error.message);
        // errorLogger(error.stack)
      }
    };

    showCountries();
  }, [dispatch]);

  if (!countries) {
    <Wrapper>
      <CountryListStyled>
        <p>Loading...</p>
      </CountryListStyled>
    </Wrapper>;
  }

  return (
    <Wrapper>
      <CountryListStyled>
        {countries.map((country, index) => {
          return <Country key={`country${index}`} {...country} />;
        })}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
