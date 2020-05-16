import React from 'react'
import './static/css/App.scss'

import logo from './static/images/logo.png'
import Diagram from './Diagram'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Diagram />

      </header>
    </div>
  );
}

export default App
