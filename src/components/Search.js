import React, { useState } from "react";
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

  const [inputValue, setInputValue] = useState(filterByName);

  const onNameChange = (event) => {
    const { value } = event.target;
    dispatch(filterByNameAction(value));
  };

  const clearInput = () => {
    setInputValue("");
    dispatch(filterByNameAction(""));
  };

  return (
    <SearchStyled>
      <Input value={inputValue} onChange={onNameChange} onReset={clearInput} />

      {countryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue} </strong>: Not found in Country List
        </p>
      )}
    </SearchStyled>
  );
}

export default Search;
