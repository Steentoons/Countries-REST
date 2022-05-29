import React, { useState } from 'react'
import FilterDropdownContainer from "./FilterDropdownContainer"

const CountryFieltersContainer = (props) => {

  return (
    <div>
        {/* Using every keypress... */}
        <input type="text" onChange={(e) => {    
            const ev = e.target.value 
            const evLength = e.target.value.length      
            props.setSearchInput(ev)
            // props.setSearchInputLength(evLength)
        }} />

        {/* <FilterDropdownContainer /> */}

        {console.log(props.searchInput)}
    </div>
  )
}

export default CountryFieltersContainer