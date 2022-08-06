import React from "react";

import axios from "axios";
import "../Views/assets/css/topSection.css"

import { useState } from "react";
import { useEffect } from "react";

import CountryFieltersContainer from "../Views/components/CountryFieltersContainer";
import CountryCardContainer from "../Views/components/CountryCardContainer";
import FilterDropdownContainer from "../Views/components/FilterDropdownContainer";

const CountryDataContainer = (props) => {
  // const [renderCountryCard, setRenderCountryCard] = useState("")
  const [searchInput, setSearchInput] = useState("");
  const [searchInputLength, setSearchInputLength] = useState(0);
  const [currentRegion, setCurrentRegion] = useState("");

  // Function to call API...
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");

      const { data } = response;

      const newData = [...data];

      props.setCountries(newData);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching countries...
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App" onClick={() => fetchCountries()} data-theme={props.theme}>
      <div className="top-section-container">
        {/* Input... */}
        <CountryFieltersContainer
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchInputLength={searchInputLength}
          setSearchInputLength={setSearchInputLength}
          theme={props.theme}
        />
        {/* {Region...} */}
        <FilterDropdownContainer
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
          setSearchInput={setSearchInput}
        />
      </div>

      {/* Country Cards... */}
      <CountryCardContainer
        countries={props.countries}
        searchInput={searchInput}
        searchInputLength={searchInputLength}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        setViewedCountryState={props.setViewedCountryState}
        viewedCountryState={props.viewedCountryState}
        setNewBordersList={props.setNewBordersList}
      />
    </div>
  );
};

export default CountryDataContainer;
