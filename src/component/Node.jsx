import React from 'react'

import { Card, Button } from 'react-bootstrap';

function Node({ 
    data,
    handleAnswer
 }) {
    return (
        <Card className="text-center">
        <Card.Body>
            <Card.Text>{data.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
                {
                    data.answers.map(answer => {
                        return (
                            <Card.Text key={answer.id}>
                                <Button onClick={() => handleAnswer(answer.ref)}>{answer.text}</Button>
                            </Card.Text>
                        )
                    })
                }
        </Card.Footer>
        </Card>
    )
}

export default Node