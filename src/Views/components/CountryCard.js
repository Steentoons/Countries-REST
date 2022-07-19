import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { viewedCountry, updateBorder } from "./fn/countryCardFn";

import "../components/styles/countryCard.css";

const CountryCard = (props) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false)

  const navigateFn = () => {
    navigate("/view-country", { replace: true });
  };

  useEffect(() => {
    if (clicked === true) {
      const borderArray =
        props.viewedCountryState.borders !== undefined
          ? props.viewedCountryState.borders
          : [];

      if(borderArray === []) {} else {
        const border = updateBorder(borderArray, props.viewedCountryState.borders, props.countries);

        props.setNewBordersList(border);

        // Navigate to view page...
      navigateFn();
      }
    }

    return (
      setClicked(false)
    )
  }, [clicked]);

  // Handle clicked card...
  const individualCountry = (e) => {
    setClicked(true)
    e.preventDefault();
    const countryNameTrim = e.currentTarget.children[1].innerHTML.trim();
    const countryName = countryNameTrim.toLowerCase();

    // Filter individual country... // working...
    const currentViewCountry = viewedCountry(countryName, props.countries); // working...

    if(Object.keys(currentViewCountry).length > 0 ) {
      props.setViewedCountryState(currentViewCountry);
    }
  };

  const flag = {
    backgroundImage: `url(${props.flag})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="country-card-container">
        <div className="country-card-div" onClick={(e) => individualCountry(e)}>
          <div className="country-flag" style={flag}></div>
          <div className="country-name"> {props.name} </div>
          <div className="country-population">
            <span> Population: </span>
            {props.population}
          </div>
          <div className="country-region">
            <span> Region: </span>
            {props.region}
          </div>
          <div className="country-capital">
            <span> Capital: </span>
            {props.capital}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
