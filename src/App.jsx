import { useState } from 'react'
import {AboutMe,MyWork} from "./components"
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="app-content">
        <AboutMe/>
        <MyWork/>
      </div>
    </div>
  )
}

export default App
