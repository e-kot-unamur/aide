import React, { useEffect, useState } from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { url, endpoints } from 'js/lib/api'
import axios from 'axios'

import 'static/sass/page/home/Home.scss'
import PreviewNode from 'js/component/home/PreviewNode'
import Diagram from './Diagram'

function Home() {
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
        setDiagram({ 'nodes': res.data, 'title': title })
      })
      .catch(error => console.error(error))
  }

  return (
    <Container>
      <Row className="top-buffer">
        {
          diagram //if a diagram is selected then
            ? <Col>
                <Diagram nodes={diagram['nodes']} title={diagram['title']} setDiagram={setDiagram} />
              </Col>
            : previews
              ? Object.keys(previews).map((key, index) => {
                return (
                  <Col key={index} sm="12" md="6" lg="6" className="top-buffer">
                    <PreviewNode diagram={previews[key]} title={key} handleSelect={handleSelect} />
                  </Col>
                )
              }) 
              : <Col className="loading"><Spinner variant="primary" animation="grow" /></Col>
        }
      </Row>
    </Container>
  )
}

export default Home