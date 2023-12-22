export type CountryDto = {
    name: string;
    nativeName: string;
    capital: string;
    population?: number;
    region: string;
    flag?: ImageSvg;
    code: IsoCode,
    location?: LatLong;
    subregion: string;
    borders: string[];
    domain: string[];
    currencies: CurrencyV2[];
    languages: LanguageV2[];
}

export type IsoCode = {
    cioc: string;
    iso3: string;
    iso2: string;
}
export type LatLong = {
    lat: number;
    lng: number;
}

////////////////////////////////// API v2 ////////////////////////////////

export type APIv2Country = {
    name?: string;
    topLevelDomain?: string[];
    alpha2Code?: string; // iso2
    alpha3Code?: string; // iso3
    callingCodes?: string[];
    capital?: string;
    altSpellings?: string[];
    subregion?: string;
    region?: string;
    population?: number;
    latlng?: number[]; // Ex: [-34, -64]
    demonym?: string; // Ex: Peruvian
    area?: number;
    gini?: number;
    timezones?: string[];
    borders?: string[];
    nativeName?: string;
    numericCode?: string;
    flags?: FlagsV2;
    currencies?: CurrencyV2[];
    languages?: LanguageV2[];
    translations?: TranslationsV2;
    flag?: ImageSvg;
    regionalBlocs?: RegionalBlocV2[];
    cioc?: string; // Ex: PER
    independent?: boolean;
}

export type ImagePng = `${string}.png`;
export type ImageSvg = `${string}.svg`;

export type CurrencyV2 = {
    code?: string;
    name?: string;
    symbol?: string; // Ex: $
}

export type FlagsV2 = {
    svg?: ImageSvg;
    png?: ImagePng;
}

export type LanguageV2 = {
    iso639_1?: string;
    iso639_2?: string;
    name?: string;
    nativeName?: string;
}

export type RegionalBlocV2 = {
    acronym?: string;
    name?: string;
    otherAcronyms?: string[];
    otherNames?: string[];
}

export type TranslationsV2 = Record<string, string>