import React from 'react'
import { useState } from 'react'

import Node from '../component/Node'

function Diagrams({ nodes, setDiagram }) {
    const [node, setNode] = useState(nodes[1]) //Node 0 is for preview
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
        if (history.length !== 0) {
            let temp = history.slice()
            let lastElement = temp.pop()
            setHistory(temp)
            setNode(lastElement)
        } else {
            setDiagram() // diagram === undefined, previews will be rerendered
        }
    }

    return (
        <Node data={node}
            handleAnswer={handleAnswer}
            handleReturn={handleReturn}
        />
    )
}

export default Diagrams