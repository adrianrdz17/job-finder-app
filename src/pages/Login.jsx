import React, { useContext, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { authContext } from '../Context/AuthContext';
import imageMain from '../img/laptop-gcba373556_1920.jpg';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className="contenedor">
            <figure className="contenedor-img">
                <img alt="Encuentre el trabajo de sus sueños" src={imageMain} />
            </figure>
            <Form className=" w-50 p-5   bg-white" onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control
                        placeholder="Introduzca su correo"
                        ref={email}
                        type="email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        placeholder="Introduzca su contraseña"
                        ref={password}
                        type="password"
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-primary btn-lg"
                >
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Login;
