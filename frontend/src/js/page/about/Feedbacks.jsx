import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { url, endpoints } from 'js/lib/api'
import Feedback from 'js/component/about/Feedback'
import axios from 'axios'
import 'static/sass/page/about/Feedbacks.scss'

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
          !loading ?
            <Information
              metadata={feedbacksOverview}
              feedbacks={feedbacks} />
            : <Col className="loading">
              <Spinner
                variant="primary"
                animation="grow"
              />
            </Col>
        }
      </Row>
    </Container>
  )
}

function Information({ metadata, feedbacks }) {
  return (
    <>
      {
        feedbacks.length !== 0 ?
          Object
            .entries(feedbacks)
            .map(([key, value]) => <Feedback feedback={value} />)
          : <p>Aucun étudiant n'a encore donné d'avis</p>
      }
    </>
  )
}

/* 
        <Col xs='12' md='4' lg='4' className='graph-part'>
          <Graphics total={metadata.total} />
        </Col>
*/

export default Feedbacks