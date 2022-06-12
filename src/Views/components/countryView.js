import React, { useEffect, useState } from 'react'

let printBorders

// Component...
const CountryView = (props) => {

  const [allBorders, setAllBorders] = useState([])

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

  // Border event Handler...
  const viewBorderHandler = e => {
    e.preventDefault()

    const countryName = e.currentTarget.innerHTML.toLowerCase()
    const filteredBorder = filteredBorderCurrent(countryName)

    console.log(filteredBorder)

    props.setViewedCountryState(filteredBorder)
  }

  // Printing the Border Countries and creating an eventListener...
  const updateBorder = (borderArray) => {
    console.log("Whats happening...")
    console.log(props.viewedCountryState)

      props.viewedCountryState.borders.forEach(item => {
      const bordersArr = filterBorder(item)[0]

      borderArray.push(bordersArr)

        // console.log(bordersArr)
    })

    return(
      borderArray
    )
  }


  // Storing all Border Objects
  useEffect(() => {
    const borderArray = []
    const borders = updateBorder(borderArray)

    setAllBorders(borders)

    console.log("Miracle...")
    console.log(borders)  

  }, [props.viewedCountryState])

  const filteredBorderCurrent = (countryName) => {

    const allBordersFilter = item => {
      const borderCountry = item.name.common.toLowerCase()

      return borderCountry === countryName
    }
    const filteredBorder = allBorders.filter(allBordersFilter)

    return filteredBorder[0]
  }

  return (
    <div>
      <ul>
        {
          allBorders.map((item, idx) => {

            return (
              <li key={idx}>{item.name.common}</li>
            )
          })
        }
      </ul>  
    </div>
  )
}

export default CountryView