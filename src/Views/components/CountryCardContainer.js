import React, { useState } from 'react'
import CountryCard from './CountryCard'
import { useEffect } from 'react'

const CountryCardContainer = (props) => {
  useEffect(() => {
    console.log("This COuntryCardContainer is running")
  }, [])
  // Ititializing the country card state...
    // const [CountryCardState, setCountryCardState] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])
    const [displayedCountries, setDisplayedCountries] = useState([])
    const [displayCountries, setDisplayCountries] = useState()

  // Including the page content once after api call finish...
  useEffect(() => {
    console.log("Including the page content once after api call finish...")
    console.log(props.countries)
    if(props.countries.length > 0 ) {
      
      if(props.searchInput === "") {
        console.log("====================================Done")

        // console.log("This is country card state...")
        // console.log(props.countryCardState)

        setDisplayedCountries(props.countries)
     }
    }
  
  }, [props.countries])
  

  // Printing all the country cards in reference input search value...
  useEffect(() => {

    if(props.searchInput === "" ) {
      console.log("input is empty")

      setDisplayedCountries(props.countries)
   }
   else if (props.searchInput !== "") {
     console.log("Input is not empty")

     const isSearchValid = (index) => {
      const prop = props.countries[index]
      const countriesLowercase = prop.name.common.toLowerCase()
        return (countriesLowercase.includes(props.searchInput))
    }

    // Printing the filtered countries...
    const filteredCountriesArr = props.countries.filter((item, index) => {
      console.log(isSearchValid(index))

    });

    console.log("!!!!!!!!!!")
    console.log(filteredCountriesArr)

  
    setFilteredCountries(filteredCountriesArr)
    setDisplayedCountries(filteredCountries)
   }


  }, [props.searchInput])
    
  return (
    <div>
        {
          displayedCountries.map((item, index) => {
            const prop = displayedCountries[index]
              return (
                <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
              )
          })
        }
    </div>
  )
}

export default CountryCardContainer