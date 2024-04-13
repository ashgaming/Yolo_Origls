import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from './Product'

export default function FormContainer({ children, product }) {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
        {
          /*
        <Col xs={12} md={6} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        
          <Product product={product} />
        </Col>
        */}  
      </Row>
    </Container>
  )
}
