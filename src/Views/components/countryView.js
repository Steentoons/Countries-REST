import React, { useEffect, useState } from 'react'

let printBorders

const CountryView = (props) => {
  const filterBorder = () => {
    const test = [{
      name: {
        common: "Steen Country"
      }
    }]
    return test
  }

  useEffect(() => {
      printBorders = props.viewedCountryState.borders.map((item, idx) => {
      const bordersArr = filterBorder()
      const borders = bordersArr[0]
  
      if(allBorders !== []) {
        setAllBorders([...allBorders, borders])
      }
  
      return (
        <li key={idx}>{borders.name.common}</li>
      )
    })
    console.log(props.viewedCountryState.borders)
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