import React from 'react'

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
          <span>Prendre contact</span>
        </a>
        <a href="/" rel="noopener noreferrer" className="top-bar-link">
          <span>A propos</span>
        </a>
      </div>
    </div>
  )
}

export default TopBar
