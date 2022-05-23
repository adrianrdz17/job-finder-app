import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authContext } from './Context/AuthContext';

import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import { postWithToken } from './api';
import { Container } from 'react-bootstrap';

const JobFinderApp = () => {
    const context = useContext(authContext);

    useEffect(() => {
        postWithToken('/api/auth/validate').then(({ data }) => {
            if (data.failed) {
                console.log(data);
            } else {
                context.setAuth({
                    id: data.user.id,
                    name: data.user.name,
                    logged: true,
                });
            }
        });
    }, []);

    return (
        <>
            <NavbarComp />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </>
    );
};

export default JobFinderApp;
