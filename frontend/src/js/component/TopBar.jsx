import React from 'react'

import '../../static/sass/TopBar.scss'
import faFacebook from '../../static/icons/facebook.svg'
import faInfoCircle from '../../static/icons/info-circle.svg'

//TODO - About
function TopBar({ logo, width, ...props }) {
  return (
    <div {...props}>
      <img
        className="top-bar-logo"
        src={logo}
        width={width}
        alt="E-kot logo"
      />
      <div className="top-bar-links">
        <a href="https://www.facebook.com/ekotnamur" target="_blank" rel="noopener noreferrer" className="top-bar-link">
          <img src={faFacebook} className='icon' />
          <span>Prendre contact</span>
        </a>
        <a href="/" rel="noopener noreferrer" className="top-bar-link">
          <img src={faInfoCircle} className='icon' />
          <span>A propos</span>
        </a>
      </div>
    </div>
  )
}

export default TopBar
