import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";

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
  const CountryListByName = useSelector((state) => state.CountryListByName);

  const [inputValue, setInputValue] = useState(filterByName);

  const onNameChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: "FILTER_BY_NAME",
      payload: value,
    });
  };

  const clearInput = () => {
    setInputValue("");
    dispatch({
      type: "FILTER_BY_NAME",
      payload: "",
    });
  };

  return (
    <SearchStyled>
      <Input value={inputValue} onChange={onNameChange} onReset={clearInput} />

      {CountryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue} </strong>: Not found in Country List
        </p>
      )}
    </SearchStyled>
  );
}

export default Search;
