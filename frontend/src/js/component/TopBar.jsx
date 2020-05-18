import React from 'react'

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
        <a href="#" className="top-bar-link">
          <span>Prendre contact</span>
        </a>
        <a href="#" className="top-bar-link">
          <span>A propos</span>
        </a>
      </div>
    </div>
  )
}

export default TopBar
