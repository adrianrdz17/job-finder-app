import React, { useContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { authContext } from './Context/AuthContext';

import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import { postWithToken } from './api';

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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acceder" element={<Login />} />
                <Route path="/crear" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default JobFinderApp;
