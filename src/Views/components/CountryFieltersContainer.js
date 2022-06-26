// import React, { useState } from "react";
import searchIconLight from "../assets/images/search/search light.png"
import searchIconDark from "../assets/images/search/search dark.png"
import { useState, useEffect } from "react";
import "../assets/css/topSection.css"

const CountryFieltersContainer = (props) => {

  const [searchIcon, setSearchIcon] = useState()

  useEffect(() => {
    const newSearchIcon = props.theme === "light" ? searchIconLight : searchIconDark
    setSearchIcon(newSearchIcon)
  }, [props.theme])
  
  const inputContainerStyle = {
    position: "absolute",
    display: "block",
      width: "16px",
      height: "16px",
      backgroundSize: "cover",
      marginTop: "20px",
      marginLeft: "32px",
  }
  return (
    <div className="input-container">
      <img src={searchIcon} alt="" style={inputContainerStyle} />
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
