import { APIv2Country, CountryDto, IsoCode, LatLong } from "../models";

export const countryListAdapter = (countries: APIv2Country[]): CountryDto[] => {
    return countries.map((country) => countryAdapter(country));
};

export const countryAdapter = (country: APIv2Country): CountryDto => {
    return {
        name: country.name ?? "",
        nativeName: country.nativeName ?? "",
        capital: country.capital ?? "",
        population: country.population,
        region: country.region ?? "",
        flag: country.flag,
        code: getCodes(country),
        location: getLocation(country.latlng),
        subregion: country.subregion ?? "",
        borders: country.borders ?? [],
        domain: country.topLevelDomain ?? [],
        currencies: country.currencies ?? [],
        languages: country.languages ?? [],
    };
};

const getCodes = (country: APIv2Country): IsoCode => {
    return {
        iso2: country.alpha2Code ?? "",
        iso3: country.alpha3Code ?? "",
        cioc: country.cioc ?? "",
    }
}

const getLocation = (location?: number[]): LatLong | undefined => {
    if (location?.length !== 2) return undefined;
    return {
        lat: location[0],
        lng: location[1],
    }
}