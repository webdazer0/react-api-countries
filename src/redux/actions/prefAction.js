import { prefType } from "../redux-constants";

export const toggleThemeAction = () => {
  return {
    type: prefType.TOGGLE_THEME,
  };
};

export const toggleThemeFromOSAction = (theme) => {
  return {
    type: prefType.TOGGLE_THEME_FROM_OS,
    payload: theme,
  };
};
