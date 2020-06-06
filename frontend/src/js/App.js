import React, { useState } from 'react'
import 'static/sass/App.scss'

import logo from 'static/images/logo.png'
import TopBar from 'js/layout/TopBar'
import Home from 'js/page/home/Home'

function App() {
  const [theme, setTheme] = useState('light')

  const enableDarkTheme = () =>
    setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div>
      <div id="body" data-theme={theme}>
        <TopBar id="top-bar" logo={logo} width="50" setTheme={enableDarkTheme} />
        <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />
        <Home />
      </div>
    </div>
  )
}

export default App
