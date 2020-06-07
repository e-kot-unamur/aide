import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'static/sass/component/home/FeedbackModal.scss'
import { ReactComponent as FaGrinHeartsSolid } from 'static/icons/grin-hearts-solid.svg'
import { ReactComponent as FaSadCrySolid } from 'static/icons/sad-cry-solid.svg'


function FeedbackSystem({ show, ...props }) {
  return (
    <div show={show ? 'true' : 'false'} className='feedback-system'>
      <Row>
        <Col className='option-container'>
          <FaSadCrySolid className='icon option' />
          <p>
            Non, malheureusement...
          </p>
        </Col>
        <Col className='option-container'>
          <FaGrinHeartsSolid className='icon option' />
          <p>
            Oui, merci beaucoup !
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default FeedbackSystem