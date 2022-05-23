import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';
import LogOut from './LogOut';

const NavbarComp = () => {
    const context = useContext(authContext);

    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='#'>Job Finder App</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#'>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        {!context.auth.logged && (
                            <>
                                <Nav.Link  href='#'>
                                    <Link to='/login'>Login</Link>
                                </Nav.Link>
                                <Nav.Link href='#'>
                                    <Link to='/signup'>SignUp</Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                    {context.auth.logged && (
                        <Navbar.Text className='ml-8'>
                            Signed in as: {context.auth.name}
                        </Navbar.Text>
                    )}
                    {context.auth.logged && <LogOut className='ml-3' />}
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComp;
