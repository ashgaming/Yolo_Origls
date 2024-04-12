import React, { useState, useEffect } from 'react'
import { Link, redirect, useParams } from 'react-router-dom'
import { Form, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { listProductDetails, updateProduct } from "../Actions/productActions";
import FormContainer from '../Components/FormContainer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_UPDATE_RESET } from '../Constants/productConstants';
import axios from 'axios';

export default function ProductEditScreen() {
    const { id } = useParams()
    const Location = useLocation()
    const navigate = useNavigate()
    const src = 'http://127.0.0.1:8000/static'



    const [pid, setId] = useState(id)
    const [name, setname] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDesription] = useState('')
    const [stock, setStock] = useState(0)
    const [uploading, setUploading] = useState(false)


    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        }

        if (!product.name || product._id !== Number(id)) {
            dispatch(listProductDetails(id))
        } else {
            setId(product._id)
            setname(product.name)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setDesription(product.description)
            setPrice(product.price)
            setStock(product.countInStock)
        }
    }, [dispatch, product, id, successUpdate, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: id,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock: stock,
        }))

    }

    useEffect(()=>{
    uploadFileHandler()
   },[image]
    )

    const uploadFileHandler = async (e) => {
        console.log('file')
    }
    return (
        <div >
            <Link to='/admin/productlist'>
                Go Back
            </Link>

            <FormContainer >
                <h1>Edit Product</h1>
                <h1>ID : {pid}</h1>
                {errorUpdate && <Message varient='danger' text={errorUpdate}>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message varient='danger' text={error}></Message> : (
                    <Form onSubmit={submitHandler}>

                        {image !== '' ? (<Image
                            width='100%'
                            src={image}
                        />) :
                            product.image &&
                            <Image
                                width='100%'
                                src={src + image}
                            />

                        }


                        <Form.Group controlId='name'>
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Enter image</Form.Label>
                            <Form.Control
                                type='file'
                                placeholder='Enter Image'
                                src={image}
                                onChange={(e) => setImage(e.target.value)}
                            ></Form.Control>

                            
                        </Form.Group>

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Description'
                                required
                                value={description}
                                onChange={(e) => setDesription(e.target.value)}
                                >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type='text'
                                placeholder='category'
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='brand'>
                            <Form.Label>brand</Form.Label>
                            <Form.Control type='text'
                                placeholder='brand'
                                required
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type='number'
                                required
                                placeholder='0'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='countInStock'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type='text'
                                placeholder='stock'
                                required
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}></Form.Control>
                        </Form.Group>





                        {/**
                       * 
                        <Form.Group controlId='isAdmin'>
                            <Form.Check 
                                type='checkbox'
                                Label={'Is Admin'}
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
                                <Form.Label>Is Admin</Form.Label>
                        </Form.Group>
                        */}

                        {image}

                        <Button type='submit' varient='primary' style={{ marginTop: '20px', marginBottom: '50px' }}>Update</Button>

                    </Form>
                )
                }

            </FormContainer>

        </div>
    )
}
