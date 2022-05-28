import React, { useState } from 'react'
import CountryCard from './CountryCard'
import { useEffect } from 'react'

const CountryCardContainer = (props) => {
  // Ititializing the country card state...
    const [CountryCardState, setCountryCardState] = useState("")

  // Including the page content on component mount...
  useEffect(() => {

    console.log("Calling")
    if(props.countries !== []) {
      if(props.searchInput === "") {
        setCountryCardState(
          props.countries.map((item, index) => {
            const prop = props.countries[index]
              return (
                <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
              )
          })
        )
     }
    }
  
  }, [props.countries])
  

  // Printing all the country cards in reference input search value...
  useEffect(() => {

    console.log("Called successifully and value is")
    console.log(props.searchInput)

    if(props.searchInput === "" ) {
      console.log("input is empty")
      setCountryCardState(
        props.countries.map((item, index) => {
          const prop = props.countries[index]
            return (
              <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
            )
        })
      )
   }
   else if (props.searchInput !== "") {
     console.log("Input is not empty")

    // Printing the filtered countries...
    let filteredCountries = props.countries.filter((item, index) => {
      const prop = props.countries[index]
      return (
        props.searchInput === prop.name.common
      )
    });

    setCountryCardState(
      filteredCountries.map((item, index) => {
        const prop = props.countries[index]
          return (
            <CountryCard flag={prop.flags.png} name={prop.name.common} population={prop.population} region={prop.region} capital={prop.capital} />
          )
      })
    )
   }


  }, [props.searchInput])
    
  return (
    <div>
        {/* { CountryCardState }  */}
    </div>
  )
}

export default CountryCardContainer