import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  // margin: 1em;
  overflow: hidden;
  // box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.15);
  img {
    max-width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country(props) {

  const  navigate = useNavigate()

const onNavigate = () => {
  console.log(navigate(`/country/${props.code.iso2}`));
}

  return (
    <CountryStyled onClick={onNavigate}>
      <img src={props.flag} alt="" width="360" height="auto" loading="lazy" />
      <div className="details">
        <h2>{props.name}</h2>
        <p>
          <strong>population:</strong> {props.population}
        </p>
        <p>
          <strong>region:</strong> {props.region}
        </p>
        <p>
          <strong>capital:</strong> {props.capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
