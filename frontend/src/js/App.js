import React, { useState, useEffect } from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import Stream from './page/Stream'

const API_URL = "http://localhost:3001/api"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Stream />
      </header>
    </div>
  );
}

export default App
