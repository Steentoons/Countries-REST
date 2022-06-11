import React from 'react'
import CountryDataContainer from '../../Data/CountryDataContainer'

const Homepage = (props) => {
  return (
    <>
      <CountryDataContainer setViewedCountryState={props.setViewedCountryState} />
    </>
  )
}

export default Homepage