import ViewPage from "./Views/pages/ViewPage";
import Homepage from "./Views/pages/Homepage";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

import "./Views/assets/css/main.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  // Check user set theme mode...
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Create theme mode state...
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const [countries, setCountries] = useState([]);
  const [viewedCountryState, setViewedCountryState] = useState({})
  const [newBordersList, setNewBordersList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              theme={theme}
              setTheme={setTheme}
              countries={countries}
              setCountries={setCountries}
              setViewedCountryState={setViewedCountryState}
              viewedCountryState={viewedCountryState}
              setNewBordersList={setNewBordersList}
            />
          }
        />
        <Route
          path="/view-country"
          element={
            <ViewPage
              theme={theme}
              setTheme={setTheme}
              countries={countries}
              viewedCountryState={viewedCountryState}
              setViewedCountryState={setViewedCountryState}
              newBordersList={newBordersList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
