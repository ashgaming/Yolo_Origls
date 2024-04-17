import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Actions/productActions";
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import SearchBar from '../Components/SearchBar';
import { useLocation } from 'react-router-dom';
import '../CSS/Home.css'


export default function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productlist)
  const { error, loading, products } = productList
  const location = useLocation()
  let keyword = location.search

  useEffect(() => {
    try {
      dispatch(listProducts(keyword))
    } catch (e) {
      console.log(e)
    }
  }, [dispatch, keyword])
  return (
    <div>
      <SearchBar />

      <h1>Latest Products</h1>
      {keyword}
      <Row>
        {
          loading ? <Loader />
            : error ? <Message varient={'danger'} text={error}></Message>
              :
              <>
             <div className='gridview'>
                  {
                    products.map(product => (
                      
                    <Product product={product} key={product._id}/>
                      
                    ))
                  }
                </div>
              </>
        }
      </Row>
    </div>
  )
}
