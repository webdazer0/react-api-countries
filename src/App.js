// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

import CountryList from "./components/Country-list";
import ActionList from "./components/Action-list";
import Header from "./components/Header";

const initialState = {
  CountryList: [],
  CountryListByName: [],
  CountryListByRegion: [],
  filterByName: "",
  filterByRegion: "",
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ActionList />
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
