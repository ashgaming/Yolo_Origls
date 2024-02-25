import React, { useState, useEffect } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../Components/Rating'
import '../CSS/ProductScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../Actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

export default function ProductScreen() {
//  const URL = "http://127.0.0.1:8000"
  const [qty ,setQty] = useState(1)
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useNavigate()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [id,dispatch])

  const AddToCartHandler = () =>
  {
    history(`/Cart/${id}?qty=${qty}/`)
  }

  return (
    <>

      {
        loading ? <Loader />
          :
          error ? <Message varient="danger" text={error}></Message>

            :
            <>

              <Link to='/'>
                <button className='btn btn-light my-3'>Go Back</button>
              </Link>
              <div className='ProductScreen'>



                <Row >
                  <Col>
                    <Image src={"http://127.0.0.1:8000/static" + product.image} alt={product.name} style={{ Width: '10rem', height: '30rem', aspectRatio: '3/2' }} fluid />
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

                    <Col style={{ marginTop: '2rem' }}>
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
                              <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                              </Col>
                            </Row>
                          </ListGroup.Item>

                          {
                            product.countInStock > 0 && (
                              
                              <ListGroup.Item>
                                <Row>
                                  <Col>
                                  Quantity
                                  </Col>
                                  <Col xs='auto' className='my-1'>
                                  <Form.Control 
                                  as='select'
                                  value={qty}
                                  onChange={(e)=>setQty(e.target.value)}
                                  >
                                    {
                                      [...Array(product.countInStock).keys()].map((x)=>(
                                        <option key={x+1} value={x+1}>
                                          {x+1}
                                        </option>
                                      ))
                                    }
                                  </Form.Control>
                                  </Col>
                                </Row>
                              
                              </ListGroup.Item>

                            )}
                            {
                              product.countInStock !== 0 ? (

                                <ListGroup.Item>
                            <Button 
                            onClick={AddToCartHandler}
                            className="btn-block"
                            disabled={product.countInStocks === 0}
                            type='button'
                            >
                                Add To Cart
                                </Button>
                          </ListGroup.Item>
                              ) : null
                              }
                        </ListGroup>
                      </Card>
                    </Col>
                  </Col>

                </Row>


              </div>
            </>

      }


    </>
  )
}
