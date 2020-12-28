import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";

const SearchStyled = styled.div`
  // background: green;
  display: grid;
  position: relative;

  .close {
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  }
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

  const onNameChange = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "FILTER_BY_NAME",
      payload: e.target.value,
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
      <Input value={inputValue} onChange={onNameChange} />
      {inputValue && (
        <i className="fas fa-times close" onClick={clearInput}></i>
      )}
      {CountryListByName.length === 0 && inputValue && (
        <p>
          <strong>{inputValue} </strong>: Not found in Country List
        </p>
      )}
    </SearchStyled>
  );
}

export default Search;
