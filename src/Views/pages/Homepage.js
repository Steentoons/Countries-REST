import React from 'react'
import CountryDataContainer from '../../Data/CountryDataContainer'
import Nav from '../components/Nav'

const Homepage = (props) => {
  return (
    <>
      <Nav />
      <CountryDataContainer countries={props.countries} setCountries={props.setCountries} setViewedCountryState={props.setViewedCountryState} />
    </>
  )
}

export default Homepage