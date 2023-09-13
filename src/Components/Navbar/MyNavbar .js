import React, { useContext } from 'react'
import './MyNavbar.css'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';

const MyNavbar  = () => {
  const cart = useContext(CartContext);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mynavbar">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart <span className='badge bg-warning'>{cart.count}</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar 
