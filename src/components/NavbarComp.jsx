import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';
import LogOut from './LogOut';

const NavbarComp = () => {
  const context = useContext(authContext)
  
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
                        {context.auth.logged?<LogOut />:
                        <Nav>  
                            <Nav.Link>
                                <Link to={`/crear`} className="nav-link">
                                    Crear usuario
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={`/acceder`} className="nav-link">
                                    Inicia sesion
                                </Link>
                            </Nav.Link>
                        </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComp;
