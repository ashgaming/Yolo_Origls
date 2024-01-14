import React from 'react'
//import {Link} from 'react-router-dom'
//import {Row ,Col,Image , ListGroup,Button ,Card} from 'react-bootstrap'
//import Rating from '../Components/Rating'
import products from '../Products'

export default function ProductScreen({match}) {
  const product = match ? products.find((p) => p._id === match.params.id) : null
  return (
    <div>
      {product ? product.name : 'Product not found'}
      
      </div>
  )
}
