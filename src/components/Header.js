import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    font-size: 14px;
  }
  .dark-mode {
    .moon {
      transform: rotate(-25deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

function Header() {
  const handleClick = () => {
    console.log("ciaoo");
  };

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where in the World?</h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                <i className="far fa-moon"></i>
                {/* <i className="fas fa-moon"></i> */}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
