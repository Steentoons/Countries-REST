import React, { useState } from 'react'

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

        {console.log(props.searchInput)}
    </div>
  )
}

export default CountryFieltersContainer