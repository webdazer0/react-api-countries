import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterByRegionAction } from "../redux/actions/countryAction";

const RegionStyled = styled.div`
  * {
    box-sizing: border-box;
  }

  font-size: 0.75rem;
  position: relative;

  .dropdown {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    text-align: center;

    padding: 20px;

    user-select: none;
    /* Icon */
    .fas {
      margin-left: 10px;
    }
    span {
      flex: 1;
    }
  }

  .dropdown-list {
    border-radius: 4px;
    background: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    display: none;
    padding: 10px;
    text-align: center;
    position: absolute;
    top: 100%;
    left: 0;
    list-style-type: none;
    width: 100%;
    z-index: 99;
    margin-top: 8px;

    &.open {
      display: block;
    }

    li {
      padding: 10px 0;
      cursor: pointer;
      border-radius: 5px;
      user-select: none;
      :hover {
        background: hsla(0, 0%, 90%, 0.5);
        /* opacity: 0.75; */
      }
    }
  }
`;

function Region() {
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const [dropdown, setdropdown] = useState(false);
  const dispatch = useDispatch();

  const onRegionChange = (region) => {
    dispatch(filterByRegionAction(region));
    setdropdown(false);
  };

  return (
    <RegionStyled onChange={onRegionChange}>
      <div className="dropdown" onClick={() => setdropdown(!dropdown)}>
        <span>{!!filterByRegion ? filterByRegion : "Filter by Region"}</span>
        <i className="fas fa-chevron-down"></i>
      </div>
      <ul className={`dropdown-list ${dropdown ? "open" : ""}`}>
        <li onClick={() => onRegionChange("Africa")}>Africa</li>
        <li onClick={() => onRegionChange("Americas")}>Americas</li>
        <li onClick={() => onRegionChange("Asia")}>Asia</li>
        <li onClick={() => onRegionChange("Europe")}>Europe</li>
        <li onClick={() => onRegionChange("Oceania")}>Oceania</li>
      </ul>
    </RegionStyled>
  );
}

export default Region;
