import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const styy = {
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const style = {
    position: 'fixed', /* or absolute */
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: 0
  }
  return (
    <footer >
      <Container style={style}>
        <Row>
          <Col className='text-center' style={styy}>copyright &copy; yolo menswear</Col>
        </Row>
      </Container>

    </footer>
  )
}
