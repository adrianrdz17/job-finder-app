import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobFinderApp from './JobFinderApp';
import Login from './components/Login';
import NavbarComp from './components/NavbarComp';
import SignIn from './components/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavbarComp />
        <Routes>
            <Route path="/" element={<JobFinderApp />} />
            <Route path="/acceder" element={<SignIn  />} />
            <Route path="/crear" element={<Login/>} />
        </Routes>
    </BrowserRouter>
);
