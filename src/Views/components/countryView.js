import React, { useEffect, useState } from 'react'

let printBorders

// Component...
const CountryView = (props) => {

  // Returning the country object with the borders... 
  const filterBorder = (border) => {

    const filteredBorder = (item) => {
      const country = item.cca3

      return country === border
    }

    const countries = props.countries
    const borderObj = countries.filter(filteredBorder)
    return borderObj
  }

  useEffect(() => {
      printBorders = props.viewedCountryState.borders.map((item, idx) => {
      const bordersArr = filterBorder(item)
      const borders = bordersArr[0]
  
      if(allBorders !== []) {
        setAllBorders([...allBorders, borders])
      }
  
      return (
        <li key={idx}>{borders.name.common}</li>
      )
    })
  }, [])

  const [allBorders, setAllBorders] = useState([])

  return (
    <div>
      <ul>
        {printBorders}
      </ul>  
    </div>
  )
}

export default CountryView