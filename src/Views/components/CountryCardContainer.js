import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { useEffect } from "react";

const CountryCardContainer = (props) => {
  // Ititializing the country card state...
  // const [CountryCardState, setCountryCardState] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);

  useEffect(() => {
    setDisplayedCountries(filteredCountries);
  }, [filteredCountries]);

  // Including the page content once after api call finish...
  useEffect(() => {
    if (props.countries.length > 0) {
      if (props.searchInput === "" && props.currentRegion === "") {
        setDisplayedCountries(props.countries);
      }
    }
  }, [props.countries]);

  const isSearchValid = (item, index) => {
    const prop = props.countries[index];
    const countriesLowercase = prop.name.common.toLowerCase();
    const regionLowercase = prop.region.toLowerCase();

    if (props.searchInput !== "") {
      return countriesLowercase.includes(props.searchInput);
    } else if (props.searchInput === "") {
      return regionLowercase.includes(props.currentRegion);
    }
  };

  const filter = () => {
    // Printing the filtered countries...
    const filteredCountriesArr = props.countries.filter(isSearchValid);
    setFilteredCountries(filteredCountriesArr);
  };

  // Printing all the country cards in reference input search value... And region filters
  useEffect(() => {
    if (props.searchInput === "" && props.currentRegion === "") {
      setDisplayedCountries(props.countries);
    } else if (props.searchInput !== "") {
      filter();
    }
  }, [props.searchInput]);

  useEffect(() => {
    if (props.currentRegion !== "") {
      filter();
    }
  }, [props.currentRegion]);

  return (
    <div>
      {displayedCountries.map((item, index) => {
        const prop = displayedCountries[index];
        return (
          <CountryCard
            flag={prop.flags.png}
            name={prop.name.common}
            population={prop.population}
            region={prop.region}
            capital={prop.capital}
            setViewedCountry={props.setViewedCountry}
            countries={props.countries}
          />
        );
      })}
    </div>
  );
};

export default CountryCardContainer;
