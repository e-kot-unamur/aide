import React from 'react'
import { useState } from 'react'

import Node from './component/Node'

function Diagram({nodes}) {
    const [node, setNode] = useState(nodes[0])

    const handleAnswer = (id) => {
        nodes[id] ? setNode(nodes[id]) : console.error('There is no node specified for this answer')
    }

    return (
        <Node data={node} handleAnswer={handleAnswer}/>
    )
}

export default Diagram