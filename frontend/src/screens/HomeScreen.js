import React, {useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
import Loader from '../Components/Loader';
import Message from '../Components/Message';


export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productlist)
  const { error, loading, products } = productList
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust alignment as needed
    alignItems:'center',
  };

  const gridview = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
    gap: '20px',
  }
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
        
        <div style={gridview}>

        {
          products.map(product => (
            <Product product={product} />
            ))
            
          }
          </div>
          </>
}
      </Row>
    </div>
  )
}
