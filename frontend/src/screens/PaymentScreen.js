import React, { useState, useEffect } from 'react'
import { Form, Button,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import { useNavigate } from 'react-router-dom'
//import { savePaymentMethod } from '../Actions/cartAction'
import CheckoutSteps from './CheckoutSteps'

export default function PaymentScreen() {
  const history = useNavigate()

  const cart = useSelector(state=>state.cart)
  const {shippingAddress} = cart

  const dispatch = useDispatch()
  const [paymentMethod,setPaymentMethod] = useState('GooglePay')
  if(!shippingAddress.address){
    history('/shipping')
  }
  
  const submitHandler = (e) =>{
    e.preventDefault()
    // dispatch(savePaymentMethod(paymentMethod))
    history('/placeorder')

  }
   return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>
            Select Method
          </Form.Label>
          <Col>
          <Form.Check
          type='radio'
            Label='payment or creadit card'
            id='paypal'
            value='paypal'
            name='paypalmethod'
            checked
            onChange={(e)=>setPaymentMethod(e.target.value)}
>
          </Form.Check>
          <Form.Text>
            PayPal
          </Form.Text>
          </Col>
        </Form.Group>
        <Button type='submit' varient='primary'>
          Contine
        </Button>
      </Form>
    </FormContainer>
  )
}
