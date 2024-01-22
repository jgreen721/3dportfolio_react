import React from 'react'
import {Scene} from "../"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-me-parent">
      <div className="top-header-container header-row">
      <h1>Justin</h1>
      <h1>G</h1>
      </div>
      <div className="middle-header-container header-row">
        <h3 className="l-spacing">Front</h3>
        <h3 className="l-spacing">End</h3>
        <h3 className="l-spacing">Developer</h3>
      </div>
      <div className="header-blurb">
        <p>Passionate programmer with full-stack knowledge but most comfortale and focused on front-end design. Scroll and enjoy my samples!</p>
      </div>
      <div className="canvas-overlay">
        <Scene/>
      </div>
    </div>
  )
}

export default AboutMe