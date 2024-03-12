import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../Actions/userAction';
//import { Link } from 'react-router-dom';
import '../CSS/header.css'

export default function Headers() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () =>{
    dispatch(logout())
  }
  return (
    <header>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >BRAND</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>

              { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile' >
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) :
                (
                  <LinkContainer to='/Login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                )
                }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
