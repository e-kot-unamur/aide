import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'static/sass/component/home/FeedbackModal.scss' 

function FeedbackModal({ ...props }) {
  return (
    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Cela vous a-t-il été utile ?</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Button className='feedback-btn'>Oui !</Button>
      <Button className='feedback-btn'>Non...</Button>
      </Modal.Body>
    </Modal>)
}

export default FeedbackModal