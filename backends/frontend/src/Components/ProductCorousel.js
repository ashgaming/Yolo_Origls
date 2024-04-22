import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Carousel,Image} from 'react-bootstrap'
import { listTopProducts } from '../Actions/productActions'
import Loader from './Loader';
import Message from './Message';

export default function ProductCorousel() {
    const dispatch = useDispatch()
    const productTopRated = useSelector(state=>state.productTopRated)
    const {error ,loading,products}= productTopRated
    const src="http://127.0.0.1:8000/static"
    console.log(products)

    const imaStyle = {
        Height:'15rem',
        Width:'100%',
        aspectRatio:'3/2'
    }

    useEffect(()=>{
        dispatch(listTopProducts())
    },[dispatch])
  return (
    loading?<Loader /> :
    error ? <Message varient='danger' error={error}></Message>:
    (
        <Carousel pause='hover' className='bg-dark'>
            {products.map((product)=>(
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={src+product.image} alt={product.name} height='15rem' width='100%' style={imaStyle} fluid loading='lazy'/>
                        <Carousel.Caption classname='carousel.caption'>
                            <h4 Style='color:black'>{product.name} ( &#x20B9; {product.price}) </h4>

                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            )

            )}
        </Carousel>
    )
  )
}
