import React from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import DiagramStream from './page/DiagramStream'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <DiagramStream />
      </header>
    </div>
  );
}

export default App
