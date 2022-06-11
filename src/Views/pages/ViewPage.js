import React from 'react'
import { useEffect } from 'react'

const ViewPage = (props) => {
  useEffect(() => {
    console.log("Bla blaaaaaaa")
    console.log(props.viewedCountryState.name.common)
  }, [])
  
  return (
    <div>ViewPage</div>
  )
}

export default ViewPage