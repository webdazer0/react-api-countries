import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  position: relative;
  background-color: white;
  flex: 1;
  align-items: center;
  padding: 0 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  input {
    // width: 100%;
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    padding: 0 2rem;
    font-size: 0.7em;

    outline: 0;
    position: relative;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  i {
    color: #c4c4c4;
    width: 15px;
    height: 48px;
    line-height: 48px;
    margin-left: 0.6rem;
    // background-color: green;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;

function Input({ ...props }) {
  return (
    <InputStyled>
      <input type="text" {...props} placeholder="Search for a country" />
      <i className="fas fa-search"></i>
    </InputStyled>
  );
}

export default Input;
