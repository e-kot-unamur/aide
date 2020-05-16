import React from 'react'

import { Card } from 'react-bootstrap';

function Node(props) {

    return (
        <Card className="text-center">
        <Card.Header>Problématique</Card.Header>
        <Card.Body>
            <Card.Text>Chose à faire</Card.Text>
        </Card.Body>
        <Card.Footer>Différentes réponses possibles</Card.Footer>
        </Card>
    )
}

export default Node