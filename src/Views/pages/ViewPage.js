import React from "react";
import CountryView from "../components/CountryView";

const ViewPage = (props) => {

  return (
    <div>
      <CountryView
        countries={props.countries}
        viewedCountryState={props.viewedCountryState}
        setViewedCountryState={props.setViewedCountryState }
      />
    </div>
  );
};

export default ViewPage;
