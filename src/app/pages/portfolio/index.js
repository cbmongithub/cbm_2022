import { FaGithub, FaEye } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { DataPortfolio } from '../../data'

const Portfolio = () => (
  <section className='portfolio'>
    <Container>
      <Row className='my-5'>
        <Col>
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
              <Card className='mb-5'>
                <Card.Img variant='top' src={data.img} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Link
                    href={data.code_link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub />
                  </Card.Link>
                  <Card.Link
                    href={data.live_link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaEye />
                  </Card.Link>
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
