import React from 'react'

import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

import CountryFieltersContainer from '../Views/components/CountryFieltersContainer';
import CountryCardContainer from '../Views/components/CountryCardContainer';

const CountryDataContainer = () => {

    const [renderCountryCard, setRenderCountryCard] = useState("")

    const [countries, setCountries] = useState([
      // {
      //   name: {common: "China"},
      //   population: 746,
      //   region: "America",
      //   capital: "Beijing",
      //   flags: {png: "Url"}
      // },
      // {
      //   name: {common: "Rusia"},
      //   population: 746,
      //   region: "Asia",
      //   capital: "Kiev",
      //   flags: {png: "Url"}
      // },
      // {
      //   name: {common: "Uganda"},
      //   population: 746,
      //   region: "Africa",
      //   capital: "Kampala",
      //   flags: {png: "Url"}
      // }
    
    ])
      const [searchInput, setSearchInput] = useState("")
      const [searchInputLength, setSearchInputLength] = useState(0)


    // Fetching countries...
    useEffect(() => {
        fetchCountries()
      }, [])

      // useEffect(() => {
      //   if(countries !== []) {
      //     setRenderCountryCard(<CountryCardContainer countries={countries} searchInput={searchInput} searchInputLength={searchInputLength} />)
      //   }
      // }, [countries])
    
      // useEffect(() => {
      //   countries.forEach(item => {
      //     console.log(item.name.official)
      //   })
      // }, [countries])
    
        // Function to call API...
       const fetchCountries = async() => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')

            const {data} = response

            const newData = [...data]
    
            setCountries(newData)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
      return (
        <div className="App" onClick={() => fetchCountries()}>
          <CountryFieltersContainer searchInput={searchInput} setSearchInput = {setSearchInput} searchInputLength={searchInputLength} setSearchInputLength={setSearchInputLength}/>
          {/* {renderCountryCard} */}
          <CountryCardContainer countries={countries} searchInput={searchInput} searchInputLength={searchInputLength} />
        </div>
      );
}

export default CountryDataContainer