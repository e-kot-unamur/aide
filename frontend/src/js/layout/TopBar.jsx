import React from 'react'

import { ReactComponent as FaFacebook } from 'static/icons/facebook.svg'
import { ReactComponent as FaInfoCircle } from 'static/icons/info-circle.svg'
import { ReactComponent as FaAdjustSolid } from 'static/icons/adjust-solid.svg'
import { Link } from "react-router-dom"
import { contact } from 'js/lib/api'
import 'static/sass/layout/TopBar.scss'

function TopBar({ logo, width, setTheme, ...props }) {
  return (
    <div {...props}>
      <img
        className="top-bar-logo"
        src={logo}
        width={width}
        alt="E-kot logo"
      />
      <div className="top-bar-links">
        <a href={contact} target="_blank" rel="noopener noreferrer" className="top-bar-link">
          <FaFacebook className='icon' alt='Facebook icone' />
          <span>Prendre contact</span>
        </a>
        <Link to="/about" className="top-bar-link">
          <FaInfoCircle className='icon' alt='A propos icone' />
          <span>A propos</span>
        </Link>
        {
          setTheme
            ? <div id='theme-button'>
              <FaAdjustSolid className='icon' alt='Theme' onClick={() => setTheme()} />
            </div>
            : <></>
        }
      </div>
    </div>
  )
}

export default TopBar
