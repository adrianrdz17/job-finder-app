import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="color-nav"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand>
                        <Link to={`/`} className="nav-link">
                            Job Finder
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to={`/crear`} className="nav-link">
                                    Crea tu CV
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/acceder`} className="nav-link">
                                    Inicia sesion
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComp;
