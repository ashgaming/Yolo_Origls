import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import '../CSS/glowBtn.css'
import '../CSS/Home.css'


export default function Product({ product }) {
    const url = "http://127.0.0.1:8000/static"
    const StarColor = {
        Color: 'black',
    }


    return (

        <Card className='my-1 p-3 rounded cardStyle'>
            <Link to={`/Product/${product._id}`}>
                <Card.Img className='CardImg' src={url + product.image} alt={product.name} loading='lazy' />
            </Link>

            <Card.Body>
                <Link to={`/Product/${product._id}`} className='titleText'>
                    <Card.Title as='div'>
                        <strong >{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating clr={StarColor} value={product.rating} text={product.numReviews} />
                        {/*product.rating} from {product.numReviews} Reviews*/}
                    </div>
                </Card.Text>
                <Card.Text as='h6'>
                    &#x20B9; {product.price}/-
                    <span className='sale-price-container'>

                        <del className='sale-price'>

                            &#x20B9; {product.originalPrice}
                        </del>
                    </span>
                </Card.Text >
            </Card.Body>
        </Card>



    )
}
