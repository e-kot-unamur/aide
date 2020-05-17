import React, { useEffect, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Diagram from './Diagram'
import '../../static/sass/DiagramStream.scss'

// TODO : Change diagram load with a backend API
// This will result in a big payload when we'll be adding new diagrams
import internetDiagram from "../../diagram/internet.json"
import macDiagram from "../../diagram/mac.json"

function DiagramStream () {
    const [diagrams, setDiagrams] = useState([])

    useEffect(() => {  
         setDiagrams([internetDiagram, macDiagram])
    }, [])
    
    return (
      <Container fluid>
        <Row className="top-buffer">
        {
            diagrams.map(diagram => {
                return (
                  <Col sm="12" md="6" lg="4" className="top-buffer">
                    <Diagram nodes={diagram}/>
                  </Col>
                )
            })
        }
        </Row>
      </Container>
    )
}

export default DiagramStream