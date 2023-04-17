import { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import * as emailjs from 'emailjs-com'
import { MetaData, ContactConfig } from '../../data'
import { Container, Row, Col, Alert } from 'react-bootstrap'

import './style.css'

const Contact = () => {
  const [formData, setFormdata] = useState({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormdata({ loading: true })

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: ContactConfig.email,
      message: formData.message,
    }

    emailjs
      .send(
        ContactConfig.service_id,
        ContactConfig.template_id,
        templateParams,
        ContactConfig.user_id
      )
      .then(
        (result) => {
          console.log(result.text)
          setFormdata({
            loading: false,
            alertmessage: 'Thanks for your message! Will respond asap :)',
            message: '',
            variant: 'dark',
            show: true,
          })
        },
        (error) => {
          console.log(error.text)
          setFormdata({
            alertmessage: `Failed to send!, ${error.text}`,
            variant: 'danger',
            show: true,
          })
          document.getElementsByClassName('co_alert')[0].scrollIntoView()
        }
      )
  }

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {MetaData.site_title} | {MetaData.contact_title}
        </title>
        <meta name='description' content={MetaData.contact_p} />
      </Helmet>
      <section className='contact'>
        <Container>
          <Row className='mt-5'>
            <Col lg='8' className='mt-4'>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className='display-4 mb-4'>{MetaData.contact_title}</h1>
                <hr className='t_border mb-4 text-left' />
                <p>{MetaData.contact_p}</p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col lg='12' className='mt-4'>
              <Alert
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? 'd-block' : 'd-none'
                }`}
                onClose={() => setFormdata({ show: false })}
                dismissible
              >
                <p className='my-0'>{formData.alertmessage}</p>
              </Alert>
            </Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Col lg='12' className='d-flex align-items-center'>
                <form onSubmit={handleSubmit} className='contact__form w-100'>
                  <Row>
                    <Col lg='6' className='form-group'>
                      <input
                        className='form-control'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={formData.name || ''}
                        type='text'
                        required
                        onChange={handleChange}
                        autoComplete='off'
                      />
                    </Col>
                    <Col lg='6' className='form-group'>
                      <input
                        className='form-control rounded-0'
                        id='email'
                        name='email'
                        placeholder='Email'
                        type='email'
                        value={formData.email || ''}
                        required
                        autoComplete='off'
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <textarea
                    className='form-control rounded-0'
                    id='message'
                    name='message'
                    placeholder='Write message...'
                    rows='5'
                    value={formData.message}
                    autoComplete='off'
                    onChange={handleChange}
                    required
                  ></textarea>
                  <br />
                  <Row>
                    <Col lg='12' className='form-group'>
                      <button className='btn__submit' type='submit'>
                        {formData.loading ? 'Sending...' : 'Send'}
                      </button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </motion.div>
          </Row>
        </Container>
        <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
      </section>
    </HelmetProvider>
  )
}

export default Contact
