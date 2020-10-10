import React, { useEffect, useState } from 'react'
import 'static/sass/page/retriever/Retriever.scss'
import { url, endpoints } from 'js/lib/api'
import axios from 'axios'

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
      <input onChange={e => handleChange(e.target.value)} />
      {
        errorCode.length === 0 && <p>Rentre le code erreur mec</p>
      }
      {
        diagram && errorCode.map(nodeId => {
          if (nodeId.length === 0) {
            return <></>
          }
          if (diagram[nodeId]) {
            return <p>{diagram[nodeId].text}</p>
          } else {
            return <p>Le noeud n'existe pas</p>
          }
        })
      }
    </div>
  )
}