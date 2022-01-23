import { FaGithub, FaEye, FaNpm, FaCodepen } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { DataPortfolio } from '../../data'
import ModalTrigger from '../../components/ModalTrigger'

import './style.css'

const Portfolio = () => (
  <section className='portfolio'>
    <Container>
      <Row className='my-5'>
        <Col lg='8'>
          <h1 className='display-4 mb-4'> Portfolio </h1>
          <hr className='t_border mb-4 text-left' />
          <p>
            Browse through my recently completed projects. View code or live
            site for each project.
          </p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3}>
        {DataPortfolio.map((data, i) => {
          return (
            <Col key={i}>
              <Card className='mb-5 card__style'>
                <Card.Img variant='top' src={data.img} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.short_description}</Card.Text>
                  <Card.Link
                    href={data.github_link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub />
                  </Card.Link>
                  {data.live_link ? (
                    <Card.Link
                      href={data.live_link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaEye />
                    </Card.Link>
                  ) : (
                    ''
                  )}
                  {data.codepen_link ? (
                    <Card.Link
                      href={data.codepen_link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaCodepen />
                    </Card.Link>
                  ) : (
                    ''
                  )}
                  {data.npm_link ? (
                    <Card.Link
                      href={data.npm_link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaNpm />
                    </Card.Link>
                  ) : (
                    ''
                  )}
                  <ModalTrigger
                    title={data.title}
                    description={data.long_description}
                    features={data.features}
                    date={data.date}
                    tech={data.tech}
                  />
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  </section>
)

export default Portfolio
