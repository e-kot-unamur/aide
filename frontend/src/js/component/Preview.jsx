import React from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap';

function Preview ({diagram, title, handleSelect}) {
    return (
        <Card className="node text-center">
        <Card.Body>
            <Card.Text>{diagram.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="answers">
            <Row>
                {
                    diagram.answers.map(answer => {
                        return (
                            <Col key={answer.id}>
                            <Button variant='secondary' onClick={() => handleSelect(title)}>
                                {answer.text}
                            </Button>
                            </Col>
                        )
                    }) 
                }
            </Row>
        </Card.Footer>
        </Card>
    )
}

export default Preview