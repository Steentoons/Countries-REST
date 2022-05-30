import React, { useState, useEffect } from 'react'

const FilterDropdownContainer = (props) => {
const [isDroppedDown, setIsDroppedDown] = useState(false)

useEffect(() => {
  const el = document.getElementById("regionDropdown")
  if(isDroppedDown === true) {
    el.style.display = "block"
  }
  if(isDroppedDown === false) {
    el.style.display = "none"
  }
}, [isDroppedDown])


const openDropdown = () => {
  props.setSearchInput("")
  setIsDroppedDown(!isDroppedDown)
}

const selectRegion = (e) => {
  props.setSearchInput("")
  const val = e.target.textContent.toLowerCase()

  props.setCurrentRegion(val)
}

  return (
    <div>
        <div onClick={() => {openDropdown()}}>Fielter by region</div>
        <div id="regionDropdown">
            <div onClick={(e) => {selectRegion(e)}}>Africa</div>
            <div onClick={(e) => {selectRegion(e)}}>America</div>
            <div onClick={(e) => {selectRegion(e)}}>Asia</div>
            <div onClick={(e) => {selectRegion(e)}}>Europe</div>
            <div onClick={(e) => {selectRegion(e)}}>Ocenia</div>
        </div>
    </div>
  )
}

export default FilterDropdownContainer