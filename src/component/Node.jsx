import React from 'react'

import { Card, Button, Col, Row } from 'react-bootstrap';
import './Node.scss'

function Node({ 
    data,
    history,
    handleAnswer,
    handleReturn
 }) {
    return (
        <Card className="node text-center">
        <Card.Body>
            <Card.Text>{data.text}</Card.Text>
        </Card.Body>
        <Card.Footer className="answers">
            <Row>
                {
                history.length === 0 ? <></> : <Col><Button variant='warning' onClick={() => handleReturn()}>Retour</Button></Col>
                }
                {
                    data.answers.map(answer => {
                        return (
                            <Col key={answer.id}>
                            <Button variant='secondary' onClick={() => handleAnswer(answer.ref)}>
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

export default Node