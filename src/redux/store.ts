import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./reducers/countrySlice";
import { prefSlice } from "./reducers/prefSlice";

export const store = configureStore({
  reducer: {
    pref: prefSlice.reducer,
    country: countrySlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
