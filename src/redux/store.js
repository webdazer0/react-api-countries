import { applyMiddleware, combineReducers } from "redux";
import { createStore, compose } from "redux";
import countryReducer from "./reducers/countryReducer";
import prefReducer from "./reducers/prefReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware());

export const rootReducer = combineReducers({
  countryReducer,
  prefReducer,
});

const store = createStore(rootReducer, enhancers);

export default store;
