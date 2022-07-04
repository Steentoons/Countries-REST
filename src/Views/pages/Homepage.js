import React from 'react'
import CountryDataContainer from '../../Data/CountryDataContainer'
import Nav from '../components/Nav'

const Homepage = (props) => {
  return (
    <>
      <Nav theme={props.theme} setTheme={props.setTheme} />
      <CountryDataContainer theme={props.theme} countries={props.countries} setCountries={props.setCountries} setViewedCountryState={props.setViewedCountryState} viewedCountryState={props.viewedCountryState} />
    </>
  )
}

export default Homepage