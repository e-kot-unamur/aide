import React, { useEffect, useState } from 'react'
import APIParser from 'js/lib/APIParser'
import axios from 'axios'
import { url, endpoints } from 'js/lib/api'
import { Card } from 'react-bootstrap';
import 'static/sass/page/retriever/Retriever.scss'

export default function Retriever() {
  const [diagramId, setDiagramId] = useState(null)
  const [errorCode, setErrorCode] = useState([])
  const [diagram, setDiagram] = useState(null)

  useEffect(() => {
    const req = url + endpoints['diagram'] + diagramId
    axios.get(req)
      .then(res => setDiagram(res.data))
      .catch(error => console.error(error))
  }, [diagramId])

  useEffect(() => {
    console.log(errorCode)
  }, [errorCode])

  const handleChange = (input) => {
    setDiagramId(input[0])
    setErrorCode(input.substring(2).split('-'))
  }

  return (
    <div id='retriever'>
      <input className='retriever-input' onChange={e => handleChange(e.target.value)} />
      { errorCode.length > 1 && <Card>
        <Card.Body>
          <Card.Text>
            {
              errorCode.map(nodeId => {
                if (nodeId.length === 0) {
                  return <></>
                }
                if (diagram[nodeId]) {
                  return <><div dangerouslySetInnerHTML={
                    { __html: APIParser.parseContact(diagram[nodeId].text) }
                  } /><hr/></>
                } else {
                  return <><p>Le noeud n'existe pas</p><hr/></>
                }
              })
            }
          </Card.Text>
        </Card.Body>
      </Card>
      }
    </div>
  )
}