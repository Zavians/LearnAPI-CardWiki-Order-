import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbarbar() {
  // Assuming you are using sessionStorage to store user authentication status
  const isLoggedIn = !!sessionStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the session username
    sessionStorage.removeItem('username');
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">TCG Card Wiki</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cardp">Pokemon Card</Nav.Link>
              <Nav.Link as={Link} to="/cardy">Yugioh Card</Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarbar;
