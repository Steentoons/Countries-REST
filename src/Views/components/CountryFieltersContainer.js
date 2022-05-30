import React, { useState } from "react";
import FilterDropdownContainer from "./FilterDropdownContainer";

const CountryFieltersContainer = (props) => {
  return (
    <div>
      {/* Using every keypress... */}
      <input
        type="text"
        onChange={(e) => {
          const ev = e.target.value;
          props.setSearchInput(ev);
        }}
      />
    </div>
  );
};

export default CountryFieltersContainer;
