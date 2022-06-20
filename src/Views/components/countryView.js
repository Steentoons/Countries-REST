import React, { useEffect, useState } from 'react'
import "./styles/countryView.css"

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

  const currencyKey = Object.keys(props.viewedCountryState.currencies)[0]
  
  const languagesArr = Object.values(props.viewedCountryState.languages)

  const printLanguages = languagesArr.map((item, index) => {
    return (
      <span key={index} className='country-view-languages-span'>{item}, </span>
    )
      
  })
  return (
    <div className='country-view-container'>
      <div className="country-view-content-container">
        <div className="country-view-flag">
          <img src={props.viewedCountryState.flags.png} alt={`flag for ${props.viewedCountryState.name.common}`} />
        </div>

        <div className="country-view-div">
          <div className="country-view-title">{props.viewedCountryState.name.common}</div>
          <div className="country-view-content-container">
            <ul>
              <div className="country-view-content-list">
                <li><span>Native Name: </span>{props.viewedCountryState.name.common}</li>
                <li><span>Population: </span>{props.viewedCountryState.population}</li>
                <li><span>Region: </span>{props.viewedCountryState.region}</li>
                <li><span>Sub Region: </span>{props.viewedCountryState.subregion}</li>
                <li><span>Capital: </span>{props.viewedCountryState.capital[0]}</li>
              </div>
              <div className="country-view-content-list">
                <li><span>Top Level Domain: </span>{props.viewedCountryState.tld[0]}</li>
                <li><span>Currencies: </span>{props.viewedCountryState.currencies[currencyKey].name}</li>
                <li><span>Languages: </span>
                    {printLanguages}
                  </li>
              </div>
            </ul>
          </div>
          <div className="country-view-borders">
            <div className="country-view-border-title">Border Countries:</div> 
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
        </div>  
      </div> 


    </div>
  )
}

export default CountryView