import React, { useEffect, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import '../../static/sass/DiagramStream.scss'
import Preview from '../component/Preview'
import Diagram from './Diagrams'
import axios from 'axios'
import { url, endpoints } from '../lib/index'

function Stream() {
  const [previews, setPreviews] = useState({})
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
    console.log(req)
    axios.get(req)
      .then(res => {
        console.log(res.data)
        setDiagram(res.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <Row className="top-buffer">
        {
          diagram //if a diagram is selected then
          ? <Col><Diagram nodes={diagram} setDiagram={setDiagram} /></Col>
          
          : Object.keys(previews).map((key, index) => {
            return (
              <Col sm="12" md="6" lg="4" className="top-buffer">
                <Preview diagram={previews[key]} title={key} handleSelect={handleSelect} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default Stream