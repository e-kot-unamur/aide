import React, { useState, useEffect } from 'react'

import InnerNode from 'js/component/home/InnerNode'
import FeedbackModal from 'js/component/home/FeedbackModal'
import { url, endpoints } from 'js/lib'

function Diagram({ title, nodes, setDiagram }) {
    const [node, setNode] = useState({'id': 1, 'data': nodes[1]}) //Node 0 is for preview
    const [history, setHistory] = useState([])
    const [showFeedbackModal, setShowFeedbackModal] = useState(false) //FIXME

    // Checking for a root node
    // Then ask for the user feedback
    useEffect(() => {
        const userFeedback = () => setTimeout(() => setShowFeedbackModal(true), 500) //FIXME - Set a proper timeout
        if (node.data.answers.length === 0) {
            userFeedback()
        }
    }, [node.data.answers])

    // Change node according to the answer specified
    const handleAnswer = (id) => {
        if (nodes[id]) {
            setHistory([...history, {'id':node.id, 'data':node.data}]) //Add actual node to the stack
            setNode({'id': id, 'data': nodes[id]}) //Change the node to the next one 
        } else {    
            console.error('There is no node specified for the answer, check the json !')
        }
    }

    // Back button
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
        <>
        <InnerNode data={node.data}
            handleAnswer={handleAnswer}
            handleReturn={handleReturn}
            nodeId={node.id}
            getImgFromRemote={getImgFromRemote}
        />
        <FeedbackModal 
            show={showFeedbackModal}
            onHide={() => setShowFeedbackModal(false)}
        />
        </>
    )
}

export default Diagram