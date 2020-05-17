import React, { useEffect } from 'react'
import '../static/sass/App.scss'

import logo from '../static/images/logo.png'
import DiagramStream from './page/DiagramStream'

function App() {

  useEffect(() => {
    console.log('Coucou')
    fetch("localhost:5000")
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result)
      },
        (error) => {
        console.log(error)
        }
      )
  }, [])

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
