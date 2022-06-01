import React from "react";
import { useEffect } from "react";

const CountryCard = (props) => {
  // Looping through the country object...
  const filterViewed = (country) => {
    console.log(props.countries);
    // Array Filter method...
    const filteredCountries = (item) => {
      if(item.name.common.toLowerCase() === country) {
        console.log(item.name.common)
      }
      return item.name.common.toLowerCase() === country
    };

    const filtered = props.countries.filter(filteredCountries);
    console.log(filtered) 

    return filtered;
  };

  // Filtering individual country fn...
  const viewedCountry = (countryName) => {
    const country = countryName.toLowerCase();

    const filteredCountry = filterViewed(country);
    return filteredCountry[0];
  };

  // Handle clicked card...
  const individualCountry = (e) => {
    e.preventDefault();
    const coountryName = e.currentTarget.children[1].innerHTML;

    console.log(coountryName);

    // Filter individual country...
    const currentViewCountry = viewedCountry(coountryName);

    console.log("----------------------------")
    console.log(currentViewCountry)

    props.setViewedCountry(currentViewCountry)
  };

  return (
    <>
      <div onClick={(e) => individualCountry(e)}>
        <div>{props.flag}</div>
        <div>{props.name}</div>
        <div>{props.population}</div>
        <div>{props.region}</div>
        <div>{props.capital}</div>
      </div>
    </>
  );
};

export default CountryCard;
