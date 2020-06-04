import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap';
import APIParser from '../lib/APIParser'

//FIXME : Implement our own function instead of dangerouslySetInnerHTML
function Preview({ diagram, title, handleSelect, ...props }) {
  return (
    <Card className="node text-center">
      <Card.Body>
        <Card.Text>
          <span dangerouslySetInnerHTML={
            { __html: APIParser.parseContact(diagram.text) }
          }>
          </span>
        </Card.Text>            </Card.Body>
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