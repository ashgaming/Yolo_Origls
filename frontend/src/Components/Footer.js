import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {
  const styy = {
    backgroundColor:'grey',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <footer >
      <Container>
        <Row>
          <Col className='text-center' style={styy}>copyright &copy; yolo menswear</Col>
        </Row>
      </Container>

    </footer>
  )
}
