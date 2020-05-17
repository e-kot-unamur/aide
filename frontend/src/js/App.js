import React, { useState, useEffect } from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import DiagramStream from './page/DiagramStream'

const API_URL = "http://localhost:3001/api"

function App() {
  const [api, setApi] = useState("Api is not connected") //FIXME - Delete if working

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.text())
      .then(res => setApi(res), error => console.error(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <DiagramStream />
        <span><b>{api}</b></span>
      </header>
    </div>
  );
}

export default App
