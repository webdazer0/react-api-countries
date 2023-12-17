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
  const filterByName = useSelector((state) => state.filterByName);
  const countryListByName = useSelector((state) => state.countryListByName);

  const onNameChange = (event) => {
    const { value } = event.target;
    dispatch(filterByNameAction(value));
  };

  const clearInput = () => {
    dispatch(filterByNameAction(""));
  };

  const par1 = countryListByName.length === 0;
  const par2 = !!filterByName
  console.log("filterByName => ", filterByName);
  console.log({par1, par2});

  return (
    <SearchStyled>
      <Input value={filterByName} onChange={onNameChange} onReset={clearInput} />

      {countryListByName.length === 0 && !!filterByName && (
        <p>
          <strong>{filterByName} </strong>: Not found in Country List
        </p>
      )}
    </SearchStyled>
  );
}

export default Search;
