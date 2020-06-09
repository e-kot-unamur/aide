import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { url, endpoints } from 'js/lib/api'
import Graphics from 'js/component/about/Graphics'
import Feedback from 'js/component/about/Feedback'
import axios from 'axios'

function Feedbacks() {
  const [loading, setLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState({})
  const [feedbacksOverview, setFeedbacksOverview] = useState({})

  // Load feedbacks info on creation
  useEffect(() => {
    const overview = url + endpoints['feedbacks']
    axios.get(overview)
      .then(res => setFeedbacksOverview(res.data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    const fn = async () => {
      setFeedbacks(await getFeedbacks(feedbacksOverview.ids))
      setLoading(false)
    }

    fn()
  }, [feedbacksOverview])

  // Returns the 5 next feedback in the list 
  const getFeedbacks = async (ids) => {
    let req = (url + endpoints['feedback'] + '?id=').concat(ids, ',')
    return await axios.get(req)
      .then(res => res.data)
      .catch(error => console.error(error))
  }

  return (
    <Container>
      <Row className="top-buffer">
        {
          !loading
            ? <Information />
            : <Col className="loading"><Spinner variant="primary" animation="grow" /></Col>
        }
      </Row>
    </Container>
  )
}

function Information() {
  return (
    <>
      <Col lg>
        <Feedback />
      </Col>
      <Col lg>
        <Graphics />
      </Col>
    </>
  )
}

export default Feedbacks