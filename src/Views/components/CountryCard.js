import React from 'react'
import { useEffect } from 'react'

const CountryCard = (props) => {
 
  useEffect(() => {
    console.log("I am called??????")
  }, [])
  
  
  return (
    <>
      <div>
        <div>{props.flag}</div>
        <div>{props.name}</div>
        <div>{props.population}</div>
        <div>{props.region}</div>
        <div>{props.capital}</div>
      </div>
    </>
  )
}

export default CountryCard