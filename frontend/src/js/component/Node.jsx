import React from 'react'

import { Card, ListGroup } from 'react-bootstrap';
import './Node.scss'

function Node({ 
    data,
    handleAnswer,
    handleReturn
 }) {
    
    return (
        <Card variant='warning' className="node text-center">
        <Card.Body>
            {
                data  
                ? <Card.Text>{data.text}</Card.Text>
                : <Card.Text>Loading</Card.Text>
            }
        </Card.Body>
        <Card.Footer className="answers">
            <ListGroup>
                {
                    data ? 
                    data.answers.map(
                        answer => <ListGroup.Item key={answer.ref} variant='primary' onClick={() => handleAnswer(answer.ref)}>{answer.text}</ListGroup.Item>) 
                    : <></>
                }
                {
                    <ListGroup.Item variant='warning' onClick={() => handleReturn()}>Retour</ListGroup.Item>
                }
            </ListGroup>
        </Card.Footer>
        </Card>
    )
}

export default Node