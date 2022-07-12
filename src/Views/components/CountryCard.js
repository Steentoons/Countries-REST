import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../components/styles/countryCard.css";

const CountryCard = (props) => {

  const navigate = useNavigate(); 
  const [viewedCountryHasValue, setViewedCountryHasValue ] = useState(false)

  const testFn = () => {
    navigate("/view-country", { replace: true })
  }

  // Returning the country object with the borders from border updater...
  const filterBorder = (border) => {
    
    function filteredBorder(item) {

      const country = item.cca3;

      return country === border;
    }

    const countries = props.countries;
    console.log("countries")
    console.log(countries)

    const borderObj = countries.filter(filteredBorder);
    return borderObj;
  };

  // Function that stores the border countries in an array....
  const updateBorder = (borderArray) => {
    console.log("Whats happening...");
    console.log(props.viewedCountryState); // working...

    if(props.viewedCountryState.borders !== []) {
      props.viewedCountryState.borders.forEach(item => {
        const bordersArr = filterBorder(item)[0];


  
        borderArray.push(bordersArr);

        console.log(bordersArr)
  
      });
    }

    borderArray.forEach((item) => {
      let countryName = item.name.common.toLowerCase();
      console.log("What if....");
      console.log(countryName);
    });

    return borderArray;
  };

  useEffect(() => {

    if(viewedCountryHasValue === true) {
      
      const borderArray = props.viewedCountryState.borders !== undefined ? props.viewedCountryState.borders : []
      const border = updateBorder(borderArray)

      props.setNewBordersList(border)
      testFn()
    }
      
  }, [viewedCountryHasValue])
  // Looping through the country object...
  const filterViewed = (country) => {
    // console.log(props.countries);
    // Array Filter method...

    console.log("country...")
    console.log(country)
    const filteredCountries = (item) => {
      const itemLowercase = item.name.common.toLowerCase() 
      if (itemLowercase.trim() === country) {
        // console.log(item.name.common);
        console.log("item...")
        console.log(item)
        return item
      } 

      // return itemLowercase.trim() === country
    };

    if(country === " north macedonia ") {
      console.log("Something is wrong with this...")
    } // the bug...

    const filtered = props.countries.filter(filteredCountries); // working...

    console.log("filtered...")
    console.log(filtered) // working...

    return filtered;
  };

  // Filtering individual country fn...
  const viewedCountry = (countryName) => {
    console.log("ViewedCountry called successifully")
    console.log("countryName")
    console.log(countryName)
    const filteredCountry = filterViewed(countryName); // not working...
    console.log("filteredCountry...")
    console.log(filteredCountry) // not working...
    return filteredCountry[0];
  };

  // Handle clicked card...
  const individualCountry = (e) => {
    e.preventDefault();
    const countryNameTrim = e.currentTarget.children[1].innerHTML.trim()
    const countryName = countryNameTrim.toLowerCase();

    console.log("----------------------------");
    console.log(countryName); // working...

    // Filter individual country...
    const currentViewCountry = viewedCountry(countryName); // not working...

    console.log("currentViewCountry...")
    console.log(currentViewCountry);

    if(Object.keys(currentViewCountry).length > 0 ) {
      props.setViewedCountryState(currentViewCountry);
      setViewedCountryHasValue(true)
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
