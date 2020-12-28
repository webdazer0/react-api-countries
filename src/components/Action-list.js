import React from "react";
import styled from "styled-components";
import Region from "./Region";
import Search from "./Search";
import Wrapper from "./Wrapper";

const ActionListStyled = styled.div``;

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <Search />
        <Region />
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
