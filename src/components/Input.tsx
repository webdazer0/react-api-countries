import  { ChangeEvent } from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  width: 100%;
  position: relative;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  background: var(--white);

  input {
    background: transparent;
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    padding: 0 3rem;
    font-size: 0.7em;
    outline: 0;
    color: var(--black);
    position: relative;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  .icon-leading,
  .icon-trailing {
    color: #c4c4c4;
    width: 3rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    position: absolute;
   
  }
  .icon-leading {
    pointer-events: none;
    left: 0;
  }
  .icon-trailing {
    right: 0;
  }
  .close {
    position: absolute;
    cursor: pointer;
    border: none;
    /* box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05); */
  }
`;

type InputProps = {
  value: string,
  onChange: (event:  ChangeEvent<HTMLInputElement>) => void,
  onReset: VoidFunction,
}

function Input({ onReset, ...props }: InputProps) {
  return (
    <InputStyled>
      <i className="fas fa-search icon-leading"></i>
      <input type="text" {...props} placeholder="Search for a country" />
      {props.value && (
        <i className="fas fa-times close icon-trailing" onClick={onReset}></i>
      )}
    </InputStyled>
  );
}

export default Input;
