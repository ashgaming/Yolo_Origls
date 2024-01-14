import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
//import { Link } from 'react-router-dom';

export default function Headers() {
    return ( 
      <header>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >Yolo</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className="me-auto">
            <LinkContainer to='/'> 
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/Cart'> 
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/about'> 
            <Nav.Link>About Us</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/Login'> 
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>   
  )
}
