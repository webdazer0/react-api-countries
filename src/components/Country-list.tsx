import { useEffect } from "react";
import Country from "./Country";
import Wrapper from "./Wrapper";
// SERVICES
import * as countryService from "@/service/country.service";
// REDUX
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loadCountries } from "@/redux/reducers/countrySlice";
// STYLES
import styled from "styled-components";

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

  

  const countries =     useAppSelector((state) => state.country.countries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const showCountries = async () => {
                 try {
        const data = await countryService.getAll();
        dispatch(loadCountries(data));
      } catch (error) {
        if(error instanceof Error) {
          console.log("error json => ", error.message);
          // errorLogger(error.stack)
        }
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
      <CountryListStyled>
        {countries.map((country, index) => {
          return <Country key={`country${index}`} {...country} />;
        })}
      </CountryListStyled>
  );
}

export default CountryList;
