import React from 'react'
import CountryDataContainer from '../../Data/CountryDataContainer'

const Homepage = (props) => {
  return (
    <>
      <CountryDataContainer countries={props.countries} setCountries={props.setCountries} setViewedCountryState={props.setViewedCountryState} />
    </>
  )
}

export default Homepage