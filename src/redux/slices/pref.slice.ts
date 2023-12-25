import { prefEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const prefSlice = createSlice({
  name: "Pref",
  initialState: prefEmptyState,
  reducers: {
    toggleTheme: (state) => {
      return { ...state, darkTheme: !state.darkTheme };
    },
    toggleThemeFromOs: (state, action) => {
      return { ...state, darkTheme: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, toggleThemeFromOs } = prefSlice.actions;

// The function below is called a selector and allows us to select darkTheme
// from state. For example: `useSelector((state) => state.config.darkTheme)`
export const selectDarkTheme = (state: RootState) => state.pref.darkTheme;

export default prefSlice.reducer;
