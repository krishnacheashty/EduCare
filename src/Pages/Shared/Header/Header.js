import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logout } = useAuth();
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
                                <NavDropdown.Item as={HashLink} to="/admin">ADMIN</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/teacher">TEACHER</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/student">STUDENT</NavDropdown.Item>
                            </NavDropdown>
                            

                        </Nav>

                        <Nav>
                        {user?.email ?
                                <Button onClick={logout} variant="dark">Logout</Button> :
                                <>
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                                </>}
                                
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;