import React, { useState, useEffect } from "react";

const FilterDropdownContainer = (props) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  useEffect(() => {
    const el = document.getElementById("regionDropdown");
    if (isDroppedDown === true) {
      el.style.display = "block";
    }
    if (isDroppedDown === false) {
      el.style.display = "none";
    }
  }, [isDroppedDown]);

  return (
    <div className="region-container">
      <div
        className="region-title"
        onClick={() => {
          openDropdown(setIsDroppedDown, props.setSearchInput, isDroppedDown);
        }}
      >
        Fielter by region
      </div>
      <div className="region-div-overlay" id="regionDropdown">
        <div className="region-div">
          <div
            onClick={(e) => {
              selectRegion(e, props.setSearchInput, props.setCurrentRegion);
            }}
          >
            Africa
          </div>
          <div
            onClick={(e) => {
              selectRegion(e, props.setSearchInput, props.setCurrentRegion);
            }}
          >
            America
          </div>
          <div
            onClick={(e) => {
              selectRegion(e, props.setSearchInput, props.setCurrentRegion);
            }}
          >
            Asia
          </div>
          <div
            onClick={(e) => {
              selectRegion(e, props.setSearchInput, props.setCurrentRegion);
            }}
          >
            Europe
          </div>
          <div
            onClick={(e) => {
              selectRegion(e, props.setSearchInput, props.setCurrentRegion);
            }}
          >
            Ocenia
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdownContainer;

const openDropdown = (setIsDroppedDown, setSearchInput, isDroppedDown) => {
  setSearchInput("");
  setIsDroppedDown(!isDroppedDown);
};

const selectRegion = (e, setSearchInput, setCurrentRegion) => {
  setSearchInput("");
  const val = e.target.textContent.toLowerCase();

  setCurrentRegion(val);
};
