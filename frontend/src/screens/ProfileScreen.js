import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useNavigate } from 'react-router-dom';
import { getUserDetails, updateUserProfile } from "../Actions/userAction";
import { USER_UPDATE_PROFILE_RESET } from '../Constants/userConstants'

export default function ProfileScreen() {
    const history = useNavigate()

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    console.log(user.password)

    console.log(user)
    useEffect(() => {
        if (!userInfo) {
            history('/login')
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setUsername(user.username)
                setEmail(user.email)
            }
        }
    }, [history, userInfo, dispatch, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== cpassword) {
            setMessage('Password do not match')
        }
        else {
            dispatch(updateUserProfile({
                'id': user._id,
                'name': name,
                'username':username,
                'email':email,
                'password':password,
            }))
        }
    }
    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message varient='danger' text={message}>{message}</Message>}
                {error && <Message varient='danger' text={error}></Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='text'>
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type='text'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text'
                            placeholder='Enter username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='text'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>


                    <Form.Group controlId='password'>
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='cpassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password'
                            placeholder='Confirm Password'
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Button type='submit' varient='primary' style={{ marginTop: '20px' }}>Update</Button>

                </Form>
            </Col>

            <Col md={3}>
                <h2>My Order</h2>
            </Col>
        </Row>
    )
}
