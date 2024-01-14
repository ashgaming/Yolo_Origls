import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

export default function Product({product}) {
    const StarColor = {
        Color:'red',
    }

  return (
    <Card className='my-3 p-3 rounded' style={{margin:'10px'}}  >
        <Link to={`/Product/${product._id}`}>
        <Card.Img src={product.image} alt={product.name} />
        </Link> 

        <Card.Body>
            <Link to={`/Product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating clr={StarColor} value={product.rating} text={product.numReviews}/>
                    {/*product.rating} from {product.numReviews} Reviews*/}
                </div>
            </Card.Text>
            <Card.Text as='h3'>
            Rs {product.price}
            </Card.Text >
        </Card.Body>
    </Card>
  )
}
