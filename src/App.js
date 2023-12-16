import "./App.css";
import CountryList from "./components/Country-list";
import ActionList from "./components/Action-list";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function onListenerMedia(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(onListenerMedia);
    setDarkMode(mq.matches);
    return () => mq.removeListener(onListenerMedia);
  }, []);

  return (
    <div className={`App ${mainClass}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <main>
        <ActionList />
        <CountryList />
      </main>
    </div>
  );
}

export default App;
