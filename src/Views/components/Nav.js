import React from 'react'
import "./styles/nav.css"

import moonImg1 from "../assets/images/moon/moon light.png"
import moonImg2 from "../assets/images/moon/moon dark.png"

const Nav = () => {
  return (
    <div className='navigation-container'>
        <div className="navigation-title">Where in the world?</div>
        <div className="navigation-button">
            <img src={moonImg1} alt="" />
            <div className="navigation-button-name">Dark Mode</div>
        </div>
    </div>
  )
}

export default Nav