import React, { useState } from 'react'
import { Card, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import 'static/sass/component/home/FeedbackSystem.scss'


function FeedbackSystem({ show, ...props }) {
  const [sadCry, setSadCry] = useState(false)
  const [grinHearts, setGrinHearts] = useState(false)

  const setSelection = (option) => {
    if (option === 'first') {
      setGrinHearts(false)
      setSadCry(!sadCry)
    } else {
      setSadCry(false)
      setGrinHearts(!grinHearts)
    }
  }

  function sendFeedback(emoji, comment) {
    console.log('%c sendFeedBack call', 'color:orange')

  }

  return (
    <div {...props} show-feedback={show ? 'true' : 'false'}>
      <Card className='feedback-system'>
        <Card.Body>
          <Card.Title>Problème résolu ?</Card.Title>
          <Card.Text>
            Votre avis nous intéresse !
          </Card.Text>
          <Row>
            <Col className={`option-container ${sadCry ? 'selected' : ''}`} onClick={() => setSelection('first')}>
              <span className='sad-cry-solid option' />
            </Col>
            <Col className={`option-container ${grinHearts ? 'selected' : ''}`} onClick={() => setSelection('second')}>
              <span className='grin-hearts-solid option' />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <InputGroup>
            <FormControl />
            <InputGroup.Append>
              <Button onClick={() => sendFeedback()}>Envoyer</Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Footer>
      </Card>
    </div >
  )
}

export default FeedbackSystem