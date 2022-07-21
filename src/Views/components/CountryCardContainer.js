import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { useEffect } from "react";

import "../components/styles/countryCard.css"

const CountryCardContainer = (props) => {
  // Ititializing the country card state...
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);

  useEffect(() => {
    setDisplayedCountries(filteredCountries);
  }, [filteredCountries]);

  // Including the page content once after api call finish...
  useEffect(() => {

    // Persisting countries state...
    // window.sessionStorage.setItem(
    //   "countries",
    //   JSON.stringify(props.countries)
    // );

    if (props.countries.length > 0) {
      if (props.searchInput === "" && props.currentRegion === "") {
        setDisplayedCountries(props.countries);
      }
    }
  }, [props.countries]);

  // Printing all the country cards in reference input search value... And region filters
  useEffect(() => {
    if (props.searchInput === "" && props.currentRegion === "") {
      setDisplayedCountries(props.countries);
    } else if (props.searchInput !== "") {
      filter(props.countries, props.searchInput, props.currentRegion, setFilteredCountries);
    }
  }, [props.searchInput]);

  // Invoking filter for the regions...
  useEffect(() => {
    if (props.currentRegion !== "") {
      filter(props.countries, props.searchInput, props.currentRegion, setFilteredCountries);
    }
  }, [props.currentRegion]);

  return (
    <div className="country-display-container">
      {displayedCountries.map((item, index) => {
        const prop = displayedCountries[index];
        return (
          <CountryCard
            key={index}
            flag={prop.flags.png}
            name={prop.name.common}
            population={prop.population}
            region={prop.region}
            capital={prop.capital}
            setViewedCountryState={props.setViewedCountryState}
            viewedCountryState={props.viewedCountryState}
            countries={props.countries}
            setNewBordersList={props.setNewBordersList}
          />
        );
      })}
    </div>
  );
};

export default CountryCardContainer;

const filter = (countries, searchInput, currentRegion, setFilteredCountries) => {

  const isSearchValid = (item, index) => {
    const prop = countries[index];
    const countriesLowercase = prop.name.common.toLowerCase();
    const regionLowercase = prop.region.toLowerCase();
  
    if (searchInput !== "") {
      return countriesLowercase.includes(searchInput);
    } else if (searchInput === "") {
      return regionLowercase.includes(currentRegion);
    }
  };

  // Printing the filtered countries...
  const filteredCountriesArr = countries.filter(isSearchValid);
  setFilteredCountries(filteredCountriesArr);
};
