import React, {useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
import Loader from '../Components/Loader';
import Message from '../Components/Message';


export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productlist)
  const { error, loading, products } = productList
  
  useEffect(() => {
    try{
      dispatch(listProducts())
    }catch(e)
    {
      console.log(e)
    }
  }, [dispatch])
  return (
    <div>
      
        <h1>Latest Products</h1>
      <Row>
      {
        loading ?<Loader />
        : error? <Message varient={'danger'} text={error}></Message>
        :
         <>
        {
          products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={2}>
              <Product product={product} />
            </Col>
          ))

        }
          </>
}
      </Row>
    </div>
  )
}
