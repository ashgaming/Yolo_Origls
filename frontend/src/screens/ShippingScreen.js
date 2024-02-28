import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../Actions/cartAction'
export default function ShippingScreen() {


    const history = useNavigate()
    const cart = useSelector(state=>state.cart)
    const {shippingAddress}=cart

    const dispatch = useDispatch()

    const [addr, setAddr] = useState(shippingAddress.addr)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(addr,city,postalCode,country)
        dispatch(saveShippingAddress({addr,city,postalCode,country}))
        history('/payment')
    }
    return (
        <FormContainer >
            <Form onSubmit={submitHandler} style={{margin:'50px'}}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter Address'
                        value={addr ? addr:''}
                        onChange={(e) => setAddr(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter City'
                        value={city ? city :''}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='text'>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter Pincode'
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='text'>
                    <Form.Label>Contry</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter name'
                        value={country?country:''}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' varient='primary' style={{marginTop:'20px'}}>Continue</Button>

            </Form>
        </FormContainer>
    )
}
