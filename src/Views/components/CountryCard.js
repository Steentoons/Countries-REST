import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { viewedCountry, updateBorder } from "./fn/countryCardFn";

import "../components/styles/countryCard.css";

const CountryCard = (props) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  // Navigate to new country view...
  const navigateFn = () => {
    navigate("/view-country", { replace: true });
  };

  useEffect(() => {
    if (clicked === true) {
      const borderArray =
        props.viewedCountryState.borders !== undefined
          ? props.viewedCountryState.borders
          : [];

      if (borderArray === []) {
      } else {
        const border = updateBorder(
          borderArray,
          props.viewedCountryState.borders,
          props.countries
        );

        props.setNewBordersList(border);

        // Navigate to view page...
        navigateFn();
      }
    }

    return setClicked(false);
  }, [clicked]);

  return (
    <>
      <div className="country-card-container">
        <div
          className="country-card-div"
          onClick={(e) =>
            individualCountry(
              e,
              setClicked,
              props.countries,
              props.setViewedCountryState
            )
          }
        >
          <div className="country-flag" style={getFlag(props.flag)}></div>
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

// Handle clicked card...
const individualCountry = (e, setClicked, countries, setViewedCountryState) => {
  setClicked(true);
  e.preventDefault();
  const countryNameTrim = e.currentTarget.children[1].innerHTML.trim();
  const countryName = countryNameTrim.toLowerCase();

  // Filter individual country... // working...
  const currentViewCountry = viewedCountry(countryName, countries); // working...

  if (Object.keys(currentViewCountry).length > 0) {
    setViewedCountryState(currentViewCountry);
  }
};

const getFlag = (flag) => {
  const flags = {
    backgroundImage: `url(${flag})`,
    backgroundSize: "cover",
  };

  return flags;
};
