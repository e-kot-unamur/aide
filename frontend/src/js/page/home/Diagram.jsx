import React from 'react'
import { useState } from 'react'

import InnerNode from 'js/component/home/InnerNode'
import { url, endpoints } from 'js/lib'

function Diagram({ title, nodes, setDiagram }) {
    const [node, setNode] = useState({'id': 1, 'data': nodes[1]}) //Node 0 is for preview
    const [history, setHistory] = useState([])

    const handleAnswer = (id) => {
        if (nodes[id]) {
            setHistory([...history, {'id':node.id, 'data':node.data}]) //Add actual node to the stack
            setNode({'id': id, 'data': nodes[id]}) //Change the node to the next one 
        } else {    
            console.error('There is no node specified for the answer, check the json !')
        }
    }

    const handleReturn = () => {
        if (history.length !== 0) {
            let temp = history.slice()
            let lastElement = temp.pop()
            setHistory(temp)
            setNode({'id': lastElement.id, 'data': lastElement.data})
        } else {
            setDiagram() // diagram === undefined, previews will be rerendered
        }
    }
    
    // Give the URL where to find the img
    const getImgFromRemote = (nodeNumber) => {
        return url + endpoints.staticImages + `${title}/${nodeNumber}`
    }

    return (
        <InnerNode data={node.data}
            handleAnswer={handleAnswer}
            handleReturn={handleReturn}
            nodeId={node.id}
            getImgFromRemote={getImgFromRemote}
        />
    )
}

export default Diagram