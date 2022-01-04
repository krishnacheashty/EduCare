import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home"><h1 className="text-success">EduCare</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><i className="fas fa-home"></i> HOME</Nav.Link>

                            <NavDropdown title={<span><i className="fas fa-graduation-cap"></i> ACADEMICS</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">UPPER</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">MIDDLE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/admission"><i className="fas fa-users"></i> ADMISSION</Nav.Link>
                            <NavDropdown title={<span><i className="far fa-calendar-check"></i> EVENTS</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">EVENT1</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">EVENT2</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span><i className="fas fa-tachometer-alt"></i> DASHBOARD</span>} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">ADMIN</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">TEACHER</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">STUDENT</NavDropdown.Item>
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