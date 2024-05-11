import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../Actions/userAction';
import '../CSS/header.css'
import SetTheme from './SetTheme';

export default function Headers({ clr, bclr }) {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg={'dark'} data-bs-theme={'dark'}>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Detroit Watch</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Nav className="ml-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>

{/**
              <LinkContainer to='/set'>
                <Nav.Link>Setting</Nav.Link>
              </LinkContainer>

              <Nav.Item>
                <SetTheme />
              </Nav.Item>
            */}

              {userInfo ? (
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

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title={'Admin'} id='adminMenu'>
                  <LinkContainer to='/admin/userlist' >
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist' >
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist' >
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )
              }
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  )
}
