import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Redux
import { createStore, compose } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";

const initialState = {
  countryList: [],
  countryListByName: [],
  countryListByRegion: [],
  filterByName: "",
  filterByRegion: "",
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware());

const store = createStore(reducer, initialState, enhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
