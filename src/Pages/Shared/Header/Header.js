import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><h1 className="text-success">EduCare</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home"><i className="fas fa-home"></i> HOME</Nav.Link>

                            <NavDropdown title={<span><i className="fas fa-graduation-cap"></i> ACADEMICS</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item as={HashLink} to ="/upper">UPPER</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to ="/middle">MIDDLE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/admission"><i class="fas fa-users"></i> ADMISSION</Nav.Link>
                            <NavDropdown title={<span><i class="far fa-calendar-check"></i> EVENTS</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item as={HashLink} to="/event">EVENT1</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/event2">EVENT2</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><i class="fas fa-tachometer-alt"></i> DASHBOARD</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item as={HashLink} to="#action3">ADMIN</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="#action4">TEACHER</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="#action5">STUDENT</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        <Nav>
                            <Nav.Link className="bg-success text-dark rounded fw-bold text-center">Sign In</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;