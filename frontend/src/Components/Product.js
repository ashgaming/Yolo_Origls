import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import '../CSS/glowBtn.css'

export default function Product({ product }) {
    const url = "http://127.0.0.1:8000/static"
    const StarColor = {
        Color: 'black',
    }

    const imgStyle = {
        height: '200px',
        width: '100%',
        aspectRatio: '3/2'
    }

    const cartStyle = {
        margin: '12px',
        width: '15rem',
        maxWidth: '15rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxHeight:'25rem',
       // width: 'calc(33.33% - 10px)', // Adjust width and margin to fit your layout
        marginBottom: '20px',

    };


    return (

        <Card className='my-1 p-3 rounded' style={cartStyle}  >
            <Link to={`/Product/${product._id}`}>
                <Card.Img src={url + product.image} alt={product.name} style={imgStyle} loading='lazy' />
            </Link>

            <Card.Body>
                <Link to={`/Product/${product._id}`}>
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
                <Card.Text as='h3'>
                    Rs{product.price}
                </Card.Text >
            </Card.Body>
        </Card>


    )
}
