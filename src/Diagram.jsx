import React from 'react'
import { useState } from 'react'

import Node from './component/Node'

function Diagram({nodes}) {
    const [node, setNode] = useState(nodes[0])

    const handleAnswer = (id) => {
        console.log(id)
        setNode(nodes[id])
    }

    return (
        <Node data={node} handleAnswer={handleAnswer}/>
    )
}

export default Diagram