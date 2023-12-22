import React from "react";
import styled from "styled-components";
import Region from "./Region";
import Search from "./Search";
import Wrapper from "./Wrapper";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px; // x2 => 20px

    @media screen and (min-width: 768px) {
      grid-template-columns: 480px 1fr 164px;
    }
  }
`;

function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
          <Region />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}

export default ActionList;
