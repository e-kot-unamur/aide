import React from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import Stream from './page/Stream'

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
