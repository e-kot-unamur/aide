import React from 'react'
import './static/css/App.css'

import logo from './static/images/logo.png'
import Noeud from './component/Noeud'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Noeud />

      </header>
    </div>
  );
}

export default App
