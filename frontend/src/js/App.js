import React, { useState } from 'react'
import 'static/sass/App.scss'

import logo from 'static/images/logo.png'
import TopBar from 'js/layout/TopBar'
import Home from 'js/page/home/Home'
import About from 'js/page/about/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

function App() {
  const [theme, setTheme] = useState('light')

  const enableDarkTheme = () =>
    setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <Router>
      <Switch>
        <div data-theme={theme}>

          <TopBar id="top-bar" logo={logo} width="50" setTheme={enableDarkTheme} />
          <img src={logo} id="ekot-logo" alt="Logo de l'ekot" />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

        </div>
      </Switch>
    </Router>
  )
}

function HomePage() {
  return (
    <div id="home-body" className='body'>
      <Home />
    </div>
  )
}

function AboutPage() {
  return (
    <div id="about-body" className='body'>
      <About />
    </div>
  )
}

export default App
