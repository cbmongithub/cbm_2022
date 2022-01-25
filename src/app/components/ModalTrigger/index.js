import { useState } from 'react'
import { Modal } from 'react-bootstrap'
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
          <p>{`Date: ${date}`}</p>

          <p>{`Tech: ${tech}`}</p>

          <p>{`Description: ${description}`}</p>
          <p>{`Features: ${features}`}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTrigger
