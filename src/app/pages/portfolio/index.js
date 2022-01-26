import { Helmet, HelmetProvider } from 'react-helmet-async'
import { FaGithub, FaEye, FaNpm, FaCodepen } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { MetaData, PortfolioData } from '../../data'
import ModalTrigger from '../../components/ModalTrigger'

import './style.css'

const Portfolio = () => (
  <HelmetProvider>
    <Helmet>
      <title>
        {MetaData.site_title} | {MetaData.portfolio_title}
      </title>
      <meta name='description' content={MetaData.portfolio_p} />
    </Helmet>
    <section className='portfolio'>
      <Container>
        <Row className='my-4'>
          <Col lg='8' className='my-4'>
            <h1 className='display-4 mb-4'> {MetaData.portfolio_title} </h1>
            <hr className='t_border my-4 text-left' />
            <p>{MetaData.portfolio_p}</p>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className='mb-4'>
          {PortfolioData.map((data, i) => {
            return (
              <Col key={i}>
                <Card className='mb-5 card__style'>
                  <Card.Img
                    variant='top'
                    style={{ filter: 'grayscale(var(--gray-scale))' }}
                    src={data.img}
                  />
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
  </HelmetProvider>
)

export default Portfolio
