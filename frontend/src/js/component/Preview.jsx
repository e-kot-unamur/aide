import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap';

function Preview({ diagram, title, handleSelect, ...props }) {
    return (
        <Card className="node text-center">
            <Card.Body>
                <Card.Text>{diagram.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="answers">
                <ListGroup>
                    {
                        diagram.answers.map((answer, index) => {
                            return (
                                <Button key={index} variant='primary' onClick={() => handleSelect(title)}> 
                                    {answer.text}
                                </Button>
                            )
                        })
                    }
                </ListGroup>
            </Card.Footer>
        </Card>
    )
}

export default Preview