import { PropsWithChildren } from "react";
import styled from "styled-components";

const BorderItemStyled = styled.span`
  display: inline-flex;
  background: var(--white);
  padding: 0.5em 2em;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const BorderItem = (props: PropsWithChildren) => {
  return <BorderItemStyled>{props.children}</BorderItemStyled>;
};

const ChipItemStyled = styled.span`
    display: inline-flex;
    background: var(--white);
    padding: .5em 2em;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    border: solid ;
    cursor: pointer;
`;

export const Chip = (props: PropsWithChildren) => {
  return <ChipItemStyled>{props.children}</ChipItemStyled>;
};
