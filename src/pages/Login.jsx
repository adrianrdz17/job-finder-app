import React, { useContext, useRef } from 'react';
import { authContext } from '../Context/AuthContext';
import imageMain from '../img/laptop-gcba373556_1920.jpg';
import { useNavigate } from 'react-router-dom';
import { post } from '../api';
import './signIn.css';

const Login = () => {
    const context = useContext(authContext);

    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();

        console.log(email, password);

        post('/api/auth/login', {
            email: email.current.value,
            password: password.current.value,
        }).then((data) => {
            const { token, user } = data.data;
            localStorage.setItem('token', token);
            context.setAuth({
                id: user.id,
                name: user.name,
                logged: true,
            });
            navigate('/', {
                replace: true,
            });
        });
    };

    const email = useRef();
    const password = useRef();

    return (
        <div className='contenedor'>
            <figure className='contenedor-img'>
                <img alt='Encuentre el trabajo de sus sueños' src={imageMain} />
            </figure>

            <form onSubmit={login}>
                <div className='mb-3'>
                    <label for='emailInput' className='form-label'>
                        Email address
                    </label>

                    <input
                        className='form-control'
                        ref={email}
                        id='emailInput'
                        placeholder='Ingrese su email'
                        type='email'
                    />
                </div>
                <div className='mb-3'>
                    <label for='passwordInput' className='form-label'>Password</label>
                    <input
                        id='passwordInput'
                        className='form-control'
                        ref={password}
                        placeholder='Ingrese su password'
                        type='password'
                    />
                </div>

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
