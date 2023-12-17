import "./App.css";
import Header from "../components/Header";
import { useAppTheme } from "../hooks/useAppTheme";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { RoutesWithNotFound } from "../utilities/RoutesWithNotFound";
import { HomePage } from "../pages/Home";
import { CountryPage } from "../pages/Country";

function App() {
  return (
    <AppTheme>
      <Header />
      <main>
        <Router>
          <RoutesWithNotFound>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:id" element={<CountryPage />} />
          </RoutesWithNotFound>
        </Router>
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
