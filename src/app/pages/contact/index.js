import { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { ContactConfig } from '../../data'
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
    <section className='contact'>
      <Container className='pt-5'>
        <Row className='pt-5'>
          <Col lg='8'>
            <h1 className='display-4 mb-4'>Contact Me</h1>
            <hr className='t_border my-4 ml-0 text-left' />
          </Col>
        </Row>
      </Container>
      <Container className='py-5'>
        <Row>
          <Col lg='12'>
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
          <Col lg='5' className='mb-5'>
            <h3 className='pb-4'>Get in touch</h3>
            <p>{ContactConfig.description}</p>
          </Col>
          <Col lg='7' className='d-flex align-items-center'>
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
        </Row>
      </Container>
      <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
    </section>
  )
}

export default Contact
