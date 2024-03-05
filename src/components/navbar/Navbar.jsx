import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='navbar navbar-custom navbar-dark bg-dark'>
      <Container>

        {/* Title */}
        <h1 className='title text-light'>Moris K Development</h1>
          
        {/* Navigation */}
        <Nav className='ms-auto'>
          <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
          <Nav.Link to={"/portfolio"} as={NavLink}>Portfolio</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar
