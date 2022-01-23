import { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'

import './style.css'

const ModalTrigger = ({ title, description, features, date, tech }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <button className='btn__view' onClick={handleShow}>
        <FaInfoCircle />
      </button>

      <Modal
        className='modal__style'
        centered
        size='lg'
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className='modal__header'>
          <Modal.Title>{title}</Modal.Title>
          <button className='btn__close' onClick={handleClose}>
            X
          </button>
        </Modal.Header>
        <Modal.Body className='modal__body'>
          <Row>
            <Col lg={8} className='text-left'>
              <p>{`Date: ${date}`}</p>
            </Col>
            <Col lg={4} className='text-right'>
              <p>{`Tech: ${tech}`}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className='text-left'>
              <h6>Description: </h6>
              <p>{description}</p>
              <h6>Features: </h6>
              <p>{features}</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTrigger
