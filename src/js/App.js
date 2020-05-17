import React from 'react'
import '../static/css/App.scss'

import logo from '../static/images/logo.png'
import Diagram from './page/Diagram'

import data from "../diagram/internet.json"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Diagram nodes={data}/>

      </header>
    </div>
  );
}

export default App
