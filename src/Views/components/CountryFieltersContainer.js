import React, { useState } from "react";
import "../assets/css/topSection.css"

const CountryFieltersContainer = (props) => {
  return (
    <div className="input-container">
      {/* Using every keypress... */}
      <input
        type="text"
        placeholder="Search for a Country..."
        onChange={(e) => {
          const ev = e.target.value;
          props.setSearchInput(ev);
        }}
      />
    </div>
  );
};

export default CountryFieltersContainer;
