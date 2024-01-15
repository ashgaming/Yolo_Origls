import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../Products'
import '../CSS/ProductScreen.css'

export default function ProductScreen({ match }) {
  const { id } = useParams();

  const product = id ? products.find((p) => p._id === id) : null
  return (
    <div className='ProductScreen'>
      {
        product ?
          <>
            <div>

              <Link to='/'>
                <button className='btn btn-light my-3'>Go Back</button>
              </Link>
              <Row>
                <Col md={6} sm={3} xl={3}>
                  <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={5}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h3>{product.brand}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Price : Rs{product.price}/-
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Description : {product.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Rating value={product.rating} text={`${product.numReviews}`} clr={'#f8e825'} />
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col md={3}>
                  <Card>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <Row>
                          <Col>Price:</Col>
                          <Col><strong>Rs{product.price}/-</strong></Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Status:</Col>
                          {product.countInStock}
                          <Col>{product.countInStocks > 0 ? 'In Stock' : 'Out of Stock'}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button className="btn-block" disabled={product.countInStocks === 0} type='button'>Add To Cart</Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>

            </div>
          </>
          : 'Producr Not Found'

      }
    </div>
  )
}
