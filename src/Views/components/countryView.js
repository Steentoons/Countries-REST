import React, { useEffect, useState } from 'react'

let printBorders

// Component...
const CountryView = (props) => {

  const [allBorders, setAllBorders] = useState([])
  const [clickedBorderCountry, setClickedBorderCountry] = useState("")

    // Function to filter border countries matching clicked element....
    const filteredBorderCurrent = (countryName) => {

      const allBordersFilter = item => {
        const borderCountry = item.name.common.toLowerCase()
  
        return borderCountry === countryName
      }
      const filteredBorder = allBorders.filter(allBordersFilter)
  
      return filteredBorder[0]
    }

  // Border event Handler...
  const viewBorderHandler = e => {
    e.preventDefault()

    const countryName = e.currentTarget.innerHTML.toLowerCase()

    setClickedBorderCountry(countryName)

    const filteredBorder = filteredBorderCurrent(countryName)

    console.log("Check Check....")
    console.log(filteredBorder)

    props.setViewedCountryState(filteredBorder)
  }

   // Returning the country object with the borders from border updater... 
   const filterBorder = (border) => {

    const filteredBorder = (item) => {
      const country = item.cca3

      return country === border
    }

    const countries = props.countries
    const borderObj = countries.filter(filteredBorder)
    return borderObj
  }

  // Function that stores the border countries in an array....
  const updateBorder = (borderArray) => {
    console.log("Whats happening...")
    console.log(props.viewedCountryState)

      props.viewedCountryState.borders.forEach(item => {
      const bordersArr = filterBorder(item)[0]

      borderArray.push(bordersArr)

        // console.log(bordersArr)
    })

    borderArray.forEach(item => {
      let countryName = item.name.common.toLowerCase()
      console.log("What if....")
        console.log(clickedBorderCountry)
        console.log(countryName)
    })

    return(
      borderArray
    )
  }


  // Storing all Border Objects in State...
  useEffect(() => {
    const borderArray = []
    const borders = updateBorder(borderArray)

    setAllBorders(borders)

    console.log("Miracle...")
    console.log(borders)  

  }, [props.viewedCountryState])

  return (
    <div>
      <h1>{props.viewedCountryState.name.common}</h1>
      <ul>
        {
          allBorders.map((item, idx) => {

            return (
              <li key={idx} onClick={(e) => viewBorderHandler(e)}>{item.name.common}</li>
            )
          })
        }
      </ul>  
    </div>
  )
}

export default CountryView