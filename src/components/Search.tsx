import { ChangeEvent, PropsWithChildren } from "react";
import Input from "./Input";
// REDUX
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filterCountriesByName } from "../redux/reducers/countrySlice";
// STYLES
import styled from "styled-components";

const SearchStyled = styled.div`
  display: grid;
  position: relative;
`;

function Search() {
  const filters = useAppSelector((state) => state.country.filters);
  const dispatch = useAppDispatch();

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(filterCountriesByName(value));
  };

  const clearInput = () => dispatch(filterCountriesByName(""));

  return (
    <SearchStyled>
      <Input
        value={filters.byName}
        onChange={onNameChange}
        onReset={clearInput}
      />
      <CountryNotFound />
    </SearchStyled>
  );
}

export default Search;

const PillStyled = styled.span`
  box-sizing: border-box;
  display: inline-flex;
  min-height: 21px;
  background: red;
  padding: 0 8px;
  border-radius: 21px;
  font-weight: 500;
  /* color: rgb(199,223,247);
    background-color: rgb(10, 39, 68); */
  color: rgb(221, 231, 238);
  background-color: rgb(23, 26, 28);
  margin-left: 4px;
  line-height: 21px;
  inset: 0px;
`;
export const Pill = (props: PropsWithChildren) => {
  return <PillStyled>{props.children}</PillStyled>;
};

const CountryNotFoundStyled = styled.p`
  text-align: center;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  justify-content: center;
  font-size: 0.7em;
`;

function CountryNotFound() {
  const filters = useAppSelector((state) => state.country.filters);
  const countries = useAppSelector((state) => state.country.countries);

  if (countries.length > 0 || !filters.byName) return <></>;

  return (
    <CountryNotFoundStyled>
      Country not found | <Pill>SearchTerm</Pill> {filters.byName}
      {!!filters.byRegion && (
        <>
          <Pill>Region</Pill> {filters.byRegion}
        </>
      )}
    </CountryNotFoundStyled>
  );
}
