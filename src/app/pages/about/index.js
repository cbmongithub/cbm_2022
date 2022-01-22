import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DataAbout, Skills, Services } from '../../data'

import './style.css'

const About = () => (
  <section className='about'>
    <Container>
      <Row className='my-5'>
        <Col>
          <h1 className='display-4 mb-4'> About </h1>
          <hr className='t_border mb-4 text-left' />
          <p>{DataAbout.aboutme}</p>
        </Col>
      </Row>
      <Row className='my-5'>
        <Col lg='5'>
          <h3 className='mb-5'>Skills</h3>
        </Col>
        <Col lg='7'>
          <div className='skills'>
            {Skills.map((name, index) => {
              return (
                <p className='outline' key={index}>
                  {name}
                </p>
              )
            })}
          </div>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col lg='5'>
          <h3 className='my-4'>Services</h3>
        </Col>
        <Col lg='7'>
          {Services.map((data, i) => {
            return (
              <div className='py-4' key={i}>
                <h5>{data.title}</h5>
                <p>{data.description}</p>
              </div>
            )
          })}
        </Col>
      </Row>
    </Container>
  </section>
)

export default About
