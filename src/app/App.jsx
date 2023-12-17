import "./App.css";
import Header from "../components/Header";
import { useAppTheme } from "../hooks/useAppTheme";
import ActionList from "../components/Action-list";
import CountryList from "../components/Country-list";

function App() {
  return (
    <AppTheme>
      <Header />
      <main>
        <ActionList />
        <CountryList />
      </main>
    </AppTheme>
  );
}

export default App;

const AppTheme = ({ children }) => {
  const { darkTheme } = useAppTheme();

  const mainClass = darkTheme ? "is-dark-mode" : "is-light-mode";

  return <div className={`App ${mainClass}`}>{children}</div>;
};
