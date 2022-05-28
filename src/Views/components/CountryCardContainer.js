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

        // Storing the cards with all their data before setting the state...
        // const card = props.countries.map((item, index) => {
        //   const prop = props.countries[index]
        //     return (
        //       <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
        //     )
        // })

        // const card = <CountryCard flag="flag" name="name" population="98797" region="region" capital="capital" />

        // setCountryCardState(card)
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

      // Storing the cards with all their data before setting the state...
      // const card = props.countries.map((item, index) => {
      //   const prop = props.countries[index]
      //     return (
      //       <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
      //     )
      // })

      // const card = '<CountryCard flag="flag" name="name" population="98797" region="region" capital="capital" />'


      // Setting the state
      // setCountryCardState(card)
      setDisplayedCountries(props.countries)
   }
   else if (props.searchInput !== "") {
     console.log("Input is not empty")

    // Printing the filtered countries...
    let filteredCountriesArr = props.countries.filter((item, index) => {
      const prop = props.countries[index]
      return (
        props.searchInput === prop.name.common
      )
    });

    setFilteredCountries(filteredCountriesArr)
    setDisplayedCountries(filteredCountries)

    // setCountryCardState(
    //   filteredCountries.map((item, index) => {
    //     const prop = props.countries[index]
    //       return (
    //         <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
    //       )
    //   })
    // )
   }


  }, [props.searchInput])

  // Mapping through data to display all the countries in browser...
  // const displayCountries = 
    
  return (
    <div>
        {/* { CountryCardState }  */}

        {console.log("------------------------------------")}
        {console.log(displayedCountries)}
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