const countryKey = "@COUNTRY";
const prefKey = "@PREFERENCE";

export const countryType = {
  INIT: `${countryKey}/INIT`,
  FILTER_BY_REGION: `${countryKey}/FILTER_BY_REGION`,
  RESET_FILTER_BY_REGION: `${countryKey}/FILTER_BY_REGION/RESET`,
  FILTER_BY_NAME: `${countryKey}/FILTER_BY_NAME`,
  RESET_FILTER_BY_NAME: `${countryKey}/FILTER_BY_NAME/RESET`,
  RESET_FILTER_ALL: `${countryKey}/FILTERS/RESET`,
};

export const prefType = {
  TOGGLE_THEME: `${prefKey}/TOGGLE_THEME`,
  TOGGLE_THEME_FROM_OS: `${prefKey}/TOGGLE_THEME_FROM_OS`,
};
