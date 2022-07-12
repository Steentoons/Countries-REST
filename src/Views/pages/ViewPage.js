import React from "react";
import CountryView from "../components/CountryView";
import Nav from "../components/Nav";

const ViewPage = (props) => {
  return (
    <div>
      <Nav theme={props.theme} setTheme={props.setTheme} />
      <CountryView
        theme={props.theme}
        countries={props.countries}
        viewedCountryState={props.viewedCountryState}
        setViewedCountryState={props.setViewedCountryState}
        newBordersList={props.newBordersList}
      />
    </div>
  );
};

export default ViewPage;
