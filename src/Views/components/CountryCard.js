import React from "react";
import { useNavigate } from "react-router-dom";

import "../components/styles/countryCard.css"

const CountryCard = (props) => {
  const navigate = useNavigate()
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

    const filteredCountry = filterViewed(countryName);
    return filteredCountry[0];
  };

  // Handle clicked card...
  const individualCountry = (e) => {
    e.preventDefault();
    const countryName = e.currentTarget.children[1].innerHTML.toLowerCase();

    console.log(countryName);

    // Filter individual country...
    const currentViewCountry = viewedCountry(countryName);

    console.log("----------------------------")
    console.log(currentViewCountry)

    props.setViewedCountryState(currentViewCountry)
    navigate("/view-country", { replace: true })
  };

  const flag = {
    backgroundImage: `url(${props.flag})`,
    backgroundSize: "cover",
  }

  return (
    <>
      <div className="country-card-container">
        <div className="country-card-div" onClick={(e) => individualCountry(e)}>
          <div className="country-flag" style={flag}>
          </div>
          <div className="country-name">{props.name}</div>
          <div className="country-population"><span>Population: </span>{props.population}</div>
          <div className="country-region"><span>Region: </span>{props.region}</div>
          <div className="country-capital"><span>Capital: </span>{props.capital}</div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
