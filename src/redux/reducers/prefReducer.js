import { prefType } from "../redux-constants";

const configEmptyState = {
  data: [],
  darkTheme: false,
};

function prefReducer(state = configEmptyState, action) {
  switch (action.type) {
    case prefType.TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    }

    case prefType.TOGGLE_THEME_FROM_OS: {
      return {
        ...state,
        darkTheme: action.payload,
      };
    }

    default:
      return state;
  }
}

export default prefReducer;
