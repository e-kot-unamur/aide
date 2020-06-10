import React from 'react'

import 'static/sass/page/about/About.scss'
import Feedbacks from "./Feedbacks"
import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <div className='light-background'>
        <Row>
          <Col lg>
            <b>A propos</b><hr />
          </Col>
        </Row>
        <Row>
          <Col md>
            <p>L'E-kot est un kot à projet de l'UNamur visant à aider les étudiants rencontrant divers problèmes liés à l'informatique.</p>
          </Col>
          <Col md>
            <p>
              Ce site a donc pour but de vous aider, via sa démarche intuitive,
              en tentant de répondre aux questions les plus fréquentes
              (et liées à l'informatique) des étudiants de l'UNamur.
              </p>
          </Col>
        </Row>
      </div>
      <div className='light-background'>
        <Row>
          <Col lg>
            <b>Avis utilisateurs</b>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs='12' md='10' lg='8' id='feedbacks-container'>
            <Feedbacks />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default About