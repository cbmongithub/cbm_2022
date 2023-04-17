import React from 'react'
import { motion } from 'framer-motion'
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
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className='display-4 mb-4'> {MetaData.about_title} </h1>
              <hr className='t_border my-4 text-left' />
              <p>{MetaData.about_p}</p>
            </motion.div>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col lg='5'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className='mb-4'>Skills</h3>
            </motion.div>
          </Col>
          <Col lg='7'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className='skills'>
                {Skills.map((name, index) => {
                  return (
                    <p className='outline' key={index}>
                      {name}
                    </p>
                  )
                })}
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col lg='5'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h3 className='my-4'>Services</h3>
            </motion.div>
          </Col>
          <Col lg='7'>
            {Services.map((data, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className='py-4' key={i}>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </section>
  </HelmetProvider>
)

export default About
