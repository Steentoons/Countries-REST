import React from 'react'
import { useEffect } from 'react'
import CountryView from '../components/CountryView'

const ViewPage = (props) => {
  useEffect(() => {
    console.log("Bla blaaaaaaa")
    console.log(props.viewedCountryState.name.common)
  }, [])
  
  return (
    <div>
      <CountryView countries={props.countries} viewedCountryState={props.viewedCountryState} />
    </div>
  )
}

export default ViewPage