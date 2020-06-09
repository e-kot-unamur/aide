import React, { useState } from 'react'

import 'static/sass/page/about/About.scss'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

function About() {
  const [loading, setLoading] = useState(true)

  return (
    <Container>
      <Row className="top-buffer">
        {
          ! loading
            ? <b>Finished Loading</b>
            : <Col className="loading"><Spinner variant="primary" animation="grow" /></Col>
        }
      </Row>
    </Container>
  )
}

export default About