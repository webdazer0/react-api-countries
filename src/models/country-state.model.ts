import { CountryDto } from ".";

export const emptyCountryState: CountryState = {
    rawCountries: [],
    countries: [],
    filters: {
        byName: "",
        byRegion: "",
    },
};

export type CountryState = {
    rawCountries: CountryDto[];
    countries: CountryDto[];
    filters: CountryFilters;
}

export type CountryFilters = {
    byName: string;
    byRegion: string;
}