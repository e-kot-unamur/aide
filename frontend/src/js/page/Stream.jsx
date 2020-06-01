import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

import '../../static/sass/Stream.scss'
import Preview from '../component/Preview'
import Diagram from './Diagrams'
import axios from 'axios'
import { url, endpoints } from '../lib/index'

function Stream() {
  const [previews, setPreviews] = useState()
  const [diagram, setDiagram] = useState()

  useEffect(() => {
    const overview = url + endpoints['diagrams']
    axios.get(overview)
      .then(res => setPreviews(res.data))
      .catch(error => console.error(error))
  }, [])

  // Selection of a preview
  const handleSelect = (title) => {
    const req = url + endpoints['diagram'] + title
    axios.get(req)
      .then(res => {
        console.log(title)
        setDiagram({'nodes':res.data, 'title':title})
      })
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <Row className="top-buffer">
        {
          diagram //if a diagram is selected then
            ? <Col><Diagram nodes={diagram['nodes']} title={diagram['title']} setDiagram={setDiagram} /></Col>
            : previews
              ? Object.keys(previews).map((key, index) => {
                return (
                  <Col key={index} sm="12" md="6" lg="6" className="top-buffer">
                    <Preview diagram={previews[key]} title={key} handleSelect={handleSelect} />
                  </Col>
                )
            }) : <Col className="loading"><Spinner variant="primary" animation="grow" /></Col>
        }
      </Row>
    </Container>
  )
}

export default Stream