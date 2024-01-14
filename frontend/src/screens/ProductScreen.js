import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
//import {Row ,Col,Image , ListGroup,Button ,Card} from 'react-bootstrap'
//import Rating from '../Components/Rating'
import products from '../Products'
import '../CSS/ProductScreen.css'

export default function ProductScreen({ match }) {
  const { id } = useParams();

  const product = id ? products.find((p) => p._id == id) : null
  return (
    <div className='ProductScreen'>
      {
        product ?
          <>
            <div>
              <img src={product.image} />
            </div>

            <div className='details ProductScreen'>
              <div>
                <h3>
                  {product.name}
                </h3>
                <h3>
                  {product.brand}
                </h3>
                <h3>
                  {product.description}
                </h3>
                <Link to='/'>
                <button >Back</button>
                </Link>
                <button >Add TO Cart</button>
              </div>
            </div>
          </>
          : 'Producr Not Found'

      }
    </div>
  )
}
