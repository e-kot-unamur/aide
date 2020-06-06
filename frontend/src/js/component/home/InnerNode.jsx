import React, { useState } from 'react'

import { Card, ListGroup, Modal } from 'react-bootstrap';
import 'static/sass/Node.scss'
import APIParser from 'js/lib/APIParser'

function InnerNode({
  data,
  nodeId, // To get the image related to the node, if one
  getImgFromRemote,
  handleAnswer,
  handleReturn
}) {
  const [imgModal, setImgModal] = useState(false)

  //FIXME : Implement our own function instead of dangerouslySetInnerHTML
  return (
    <>
      <Card className="node text-center">
        {
          data.image && nodeId
            ? <div
              className='illustration-container'
              onClick={() => setImgModal(true)}
            >
              <img className='illustration'
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
              ? <Card.Text>
                  <span dangerouslySetInnerHTML={
                    { __html: APIParser.parseContact(data.text) }
                    }>
                  </span>
                </Card.Text>
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
                    >
                      <a href="/#" className='link'>
                        {answer.text}
                      </a>
                    </ListGroup.Item>)
                : <></>
            }
            <ListGroup.Item
              className='back-option'
              onClick={() => handleReturn()}
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

export default InnerNode