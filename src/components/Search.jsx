import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { filterByNameAction } from "../redux/actions/countryAction";

const SearchStyled = styled.div`
  display: grid;
  position: relative;
  p {
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    justify-content: center;
    font-size: 0.7em;
  }
`;

function Search() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.countryReducer.filters);
  const countries = useSelector((state) => state.countryReducer.countries);

  const onNameChange = (event) => {
    const { value } = event.target;
    dispatch(filterByNameAction(value));
  };

  const clearInput = () => dispatch(filterByNameAction(""));

  return (
    <SearchStyled>
      <Input
        value={filters.byName}
        onChange={onNameChange}
        onReset={clearInput}
      />

      {countries.length === 0 && !!filters.byName && (
        <p>
          Not found in Country List | <Pill>SearchTerm</Pill> {filters.byName}
          {!!filters.byRegion && <><Pill>Region</Pill> {filters.byRegion}</>}
        </p>
      )}
    </SearchStyled>
  );
}

export default Search;

const PillStyled = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  min-height: 21px;
  background: red;
  padding: 0 8px;
  border-radius: 21px;
  font-weight: 500;
  /* color: rgb(199,223,247);
    background-color: rgb(10, 39, 68); */
  color: rgb(221, 231, 238);
  background-color: rgb(23, 26, 28);
  margin-left: 4px;
  line-height: 21px;
  inset: 0px;
`;
export const Pill = ({ children }) =>  {
  return <PillStyled>{children}</PillStyled>
}
