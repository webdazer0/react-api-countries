import styled from 'styled-components'
import { BorderItem } from '../../components/BorderItem';
import { CountryDto } from '../../models';

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`

type CountrySelectedProps = {
  country?: CountryDto;
}

function CountrySelected({country}: CountrySelectedProps) {
  if(!country) return <></>

  return (
    <CountrySelectedStyled>
      <img src={country.flag} alt="" />
      <div>
        <h2>{country.name}</h2>
        <div className="grid">
          <div>
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {country.domain}</p>
            <p><strong>Currencies:</strong> {country.currencies.map((item, index) => <span key={index}>{item.name}</span>)}</p>
            <p className="languages"><strong>Languages:</strong> {country.languages.map((item, index) => <span key={index}>{item.name}</span>)}</p>
          </div>
        </div>
        <p className="borders"><strong>Border Countries:</strong></p>
        {country.borders.map((item, index) => <BorderItem key={index}>{item}</BorderItem>)}
      </div>
    </CountrySelectedStyled>
  )
}

export default CountrySelected

