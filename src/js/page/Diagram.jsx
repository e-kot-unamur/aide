import React from 'react'
import { useState } from 'react'

import Node from '../component/Node'

function Diagram({nodes}) {
    const [node, setNode] = useState(nodes[0])
    const [history, setHistory] = useState([])

    const handleAnswer = (id) => {
        if (nodes[id]) {
            setHistory([...history, node]) //Add actual node to the stack
            setNode(nodes[id]) //Change the node to the next one 
        } else {
            console.error('There is no node specified for the answer, check the json !')
        }
    }

    const handleReturn = () => {
        let lastElement = history.pop()
        setHistory(history)
        setNode(lastElement)
    }

    return (
        <Node data={node}
              history={history} 
              handleAnswer={handleAnswer}  
              handleReturn={handleReturn}
        />
    )
}

export default Diagram