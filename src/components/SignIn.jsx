import React from 'react'
import { Form,Button } from 'react-bootstrap'
import imageMain from '../img/laptop-gcba373556_1920.jpg'
import { Link } from 'react-router-dom'
import './sigIn.css'
const SignIn = () => {
  return (
    <div className='contenedor'>
      <figure className='contenedor-img'>
        <img src={imageMain}/>
      </figure>
      <Form className=' w-50 p-5   bg-white'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Introduzca su correo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Introduzca su contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit" className='btn btn-primary btn-lg'>
          Enviar
        </Button>
      <Link to={`/crear`} className="link-primary ms-2">Olvide mi contraseña</Link>
      </Form>
    </div>
  )
}

export default SignIn
