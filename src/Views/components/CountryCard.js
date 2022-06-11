import React from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <div>
        <div onClick={(e) => individualCountry(e)}>
          <div>{props.flag}</div>
          <div>{props.name}</div>
          <div>{props.population}</div>
          <div>{props.region}</div>
          <div>{props.capital}</div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
