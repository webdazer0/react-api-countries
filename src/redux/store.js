import { applyMiddleware } from "redux";
import { createStore, compose } from "redux";
import countryReducer from "./reducers/countryReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware());

const store = createStore(countryReducer, enhancers);

export default store;
