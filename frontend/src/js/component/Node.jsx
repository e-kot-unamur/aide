import React, { useState } from 'react'

import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import '../../static/sass/Node.scss'

function Node({
  data,
  nodeId, // To get the image related to the node, if one
  getImgFromRemote,
  handleAnswer,
  handleReturn
}) {
  const [imgModal, setImgModal] = useState(false)

  console.log(data)

  return (
    <>
      <Card variant='warning' className="node text-center">
        {
          data.image && nodeId
            ? <div
              className='illustration-container'
              onClick={() => setImgModal(true)}
            >
              <img className='illustration'
                variant='top'
                alt='illustration'
                src={getImgFromRemote(nodeId)}
              />
              <b className='illustration-text'>Cliquer pour aggrandir</b>
            </div>
            : <></>
        }
        <Card.Body>
          {
            data.text
              ? <Card.Text>{data.text}</Card.Text>
              : <Card.Text>Loading</Card.Text>
          }
        </Card.Body>
        <Card.Footer className="answers">
          <ListGroup>
            {
              data.answers ?
                data.answers.map(
                  answer =>
                    <ListGroup.Item
                      key={answer.ref}
                      onClick={() => handleAnswer(answer.ref)}
                      variant='primary'
                    >
                      <a href="/#" className='link'>
                        {answer.text}
                      </a>
                    </ListGroup.Item>)
                : <></>
            }
            <ListGroup.Item
              className='bug-correction'
              onClick={() => handleReturn()}
              variant='warning'
            >
              <a href="/#" className='link'>
                Retour
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Card.Footer>
      </Card>
      {
        data.image
          ? <FullScreenImg
            show={imgModal}
            onHide={() => setImgModal(false)}
            nodeId={nodeId}
            caption={data.image.caption}
            getImgFromRemote={getImgFromRemote}
          />
          : <></>
      }
    </>
  )
}

function FullScreenImg({
  nodeId,
  caption,
  getImgFromRemote,
  ...props
}) {
  return (
    <Modal
      {...props}
      className='my-modal'
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        {
          caption ? <b>{caption}</b> : <></>
        }
      </Modal.Header>
      <Modal.Body>
        <div className='full-screen-container'>
          <img
            className='full-screen-illustration'
            alt='illustration'
            src={getImgFromRemote(nodeId)}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Node