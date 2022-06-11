import ViewPage from "./Views/pages/ViewPage"
import Homepage from "./Views/pages/Homepage";
import {useState} from "react"

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([]);
  const [viewedCountryState, setViewedCountryState] = useState({})
  return (
      <Router>
        <Routes>
        {/* <CountryDataContainer /> */}
        <Route path="/" element={ <Homepage countries={countries} setCountries={setCountries} setViewedCountryState={setViewedCountryState} /> } />
        <Route path="/view-country" element={ <ViewPage countries={countries} viewedCountryState={viewedCountryState} /> } />
      </Routes>
      </Router>
  )
} 

export default App;
