import React from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import TopBar from './component/TopBar'
import Stream from './page/Stream'

function App() {
  return (
    <div>
      <div className="body">
        <TopBar className="top-bar" logo={logo} width="50"/>
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Stream />
      </div>
    </div>
  );
}

export default App
