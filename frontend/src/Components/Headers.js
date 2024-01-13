import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default function Headers() {
    return (    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Yolo</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

          <Nav className="me-auto">
            
            <Nav.Link to="/">Home</Nav.Link>

            <Nav.Link to="/about">About Us</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
