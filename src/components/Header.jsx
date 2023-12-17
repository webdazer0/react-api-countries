import React from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";

const HeaderStyled = styled.header`
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
  a {
    text-decoration: none;
    color: var(--dark);
  }
  .dark-mode {
    cursor: pointer;
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

  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  const onToggleTheme = () => {
    console.log("onToggleTheme");
    setDarkMode(!darkMode);
  };

  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Where in the World?</h1>
          <div className="dark-mode" onClick={onToggleTheme}>
            <p>
              <span className="moon">
                <i className={`fa${darkMode ? "s" : "r"} fa-moon`}></i>
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
