import { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import CountrySelected from "./CountrySelected";
import { useNavigate, useParams } from "react-router-dom";
// SERVICES
import * as countryService from "@/service/country.service";
// REDUX
import { useAppSelector } from "@/redux/hooks";
// STYLES
import styled from "styled-components";

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`

export const CountryPage = () => {
  const params = useParams<{id: string}>()
  const navigate = useNavigate()
  const countriesFiltered = useAppSelector(state => {
    const countries = state.country.rawCountries;
    // console.log("countries =>", countries);
    // console.log("params.id =>", params.id);
    return countries.find(item => item.code.iso2 === params.id)
  })
  const [country, setCountry] = useState(countriesFiltered)
  
  useEffect(() => {
    if (!country || !!params.id) {
      const code = params.id!.toLowerCase()
      countryService.getBy(code).then(response => setCountry(response));
    }
  }, [country, params.id])

  function handleClick() {
    navigate(-1) // history.goBack()
  }
  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"></i> Back</button>
        <CountrySelected country={country} />
      </Wrapper>
    </CountryPageStyled>
  )
};
