import React from 'react'
import "./styles/nav.css"
import { useState, useEffect } from 'react'

import moonImgLight from "../assets/images/moon/moon light.png"
import moonImgDark from "../assets/images/moon/moon dark.png"


const Nav = (props) => {
  
  const [moonState, setMoonState] = useState()

  useEffect(() => {
    const newMoonState = props.theme === "light" ? moonImgLight : moonImgDark;
    setMoonState(newMoonState)
  }, [])

  return (
    <div className='navigation-container' data-theme={props.theme}>
        <div className="navigation-title">Where in the world?</div>
        <div className="navigation-button" onClick={() => {changeThemeHandler(props.theme, moonState, setMoonState, props.setTheme)}}>
            <img src={moonState} alt="" />
            <div className="navigation-button-name">{props.theme === "light" ? "Dark Mode" : "Light Mode"}</div>
        </div>
    </div>
  )
}

export default Nav

const changeThemeHandler = (theme, moonState, setMoonState, setTheme) => {
  const newTheme = theme === "light" ? "dark" : "light";
  const newMoonState = moonState === moonImgLight ? moonImgDark : moonImgLight
  setMoonState(newMoonState)

  setTheme(newTheme);
}