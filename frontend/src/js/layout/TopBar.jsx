import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { ReactComponent as FaFacebook } from 'static/icons/facebook.svg'
import { ReactComponent as FaInfoCircle } from 'static/icons/info-circle.svg'
import { ReactComponent as FaAdjustSolid } from 'static/icons/adjust-solid.svg'
import { contact } from 'js/lib/index'
import 'static/sass/layout/TopBar.scss'

function TopBar({ logo, width, setTheme, ...props }) {
  const [aboutShow, setAboutShow] = useState(false)

  return (
    <>
      <div {...props}>
        <img
          className="top-bar-logo"
          src={logo}
          width={width}
          alt="E-kot logo"
        />
        <div className="top-bar-links">
          <a href={contact} target="_blank" rel="noopener noreferrer" className="top-bar-link">
            <FaFacebook className='icon' alt='A propos icone' />
            <span>Prendre contact</span>
          </a>
          <a href="/#" rel="noopener noreferrer" className="top-bar-link" onClick={() => setAboutShow(true)}>
            <FaInfoCircle className='icon' alt='A propos icone' />
            <span>A propos</span>
          </a>
          {
            setTheme
              ? <div id='theme-button'>
                <FaAdjustSolid className='icon' alt='Theme' onClick={() => setTheme()} />
              </div>
              : <></>
          }
        </div>
      </div>
      <About
        show={aboutShow}
        onHide={() => setAboutShow(false)}
      />
    </>
  )
}

function About({ ...props }) {
  return (
    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          A propos...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>... de ce site</b>
        <p>
          Ce site a pour but de vous aider, via sa démarche intuitive,
          en tentant de répondre aux questions les plus fréquentes
          (et liées à l'informatique) des étudiants de l'UNamur.
        </p>
        <hr />
        <b>... de l'E-kot</b>
        <p>Il s'agit d'un kot à projet de l'UNamur visant à aider les étudiants rencontrant divers problèmes liés à l'informatique.</p>
        <hr />
        <h6 id='odc'>SUUUUUUUUUUU</h6>
      </Modal.Body>
    </Modal>
  )
}

export default TopBar
