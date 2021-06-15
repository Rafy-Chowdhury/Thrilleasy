import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Headers = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: 'black'}} expand="lg">
                <Container>
                <Navbar.Toggle style={{ backgroundColor: 'white'}} aria-controls="navbarScroll" />   
              <Navbar.Brand href="#"><img style={{width: '150px'}} src={logo} alt="logo"/></Navbar.Brand>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
                  <Nav.Link style={{color: 'white'}} href="#action1">ACTIVITIES</Nav.Link>
                  <Nav.Link style={{color: 'white'}} className="links" href="#action2">COUNTRIES</Nav.Link>
                  <Nav.Link style={{color: 'white'}} className="links" href="#action1">TOURS</Nav.Link>
                  <Nav.Link style={{color: 'white'}} className="links" href="#action2">BLOGS</Nav.Link>
                  <Nav.Link style={{color: 'white'}} className="links" href="#action1">CONTACT</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand style={{color: 'white'}} href="#"><FontAwesomeIcon icon={faSearch} /></Navbar.Brand>
              </Container>
            </Navbar>
        </div>
    );
};

export default Headers;