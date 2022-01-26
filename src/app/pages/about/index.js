import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Container, Row, Col } from 'react-bootstrap'
import { MetaData, Skills, Services } from '../../data'

import './style.css'

const About = () => (
  <HelmetProvider>
    <Helmet>
      <title>
        {MetaData.site_title} | {MetaData.about_title}
      </title>
      <meta name='description' content={MetaData.about_p} />
    </Helmet>
    <section className='about'>
      <Container>
        <Row className='my-4'>
          <Col lg='8' className='my-4'>
            <h1 className='display-4 mb-4'> {MetaData.about_title} </h1>
            <hr className='t_border my-4 text-left' />
            <p>{MetaData.about_p}</p>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col lg='5'>
            <h3 className='mb-4'>Skills</h3>
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
        <Row className='mb-4'>
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
  </HelmetProvider>
)

export default About
