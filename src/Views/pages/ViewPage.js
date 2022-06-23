import React from "react";
import CountryView from "../components/CountryView";
import Nav from "../components/Nav"

const ViewPage = (props) => {

  return (
    <div>
      <Nav />
      <CountryView
        countries={props.countries}
        viewedCountryState={props.viewedCountryState}
        setViewedCountryState={props.setViewedCountryState }
      />
    </div>
  );
};

export default ViewPage;
