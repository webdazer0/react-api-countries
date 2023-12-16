import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Redux
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialState = {
  CountryList: [],
  CountryListByName: [],
  CountryListByRegion: [],
  filterByName: "",
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

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
