import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const RegionStyled = styled.select`
  // background: pink;
  padding: 1.3em;
  border: none;
  border-radius: 5px;
  outline: 0;
  width: 100%;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
`;

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

function Region() {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);
  const onRegionChange = (selectEvent) => {
    const { value } = selectEvent.target;
    dispatch(filterByRegionAction(value));
  };

  return (
    <RegionStyled onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </RegionStyled>
  );
}

export default Region;
