import { Button, Form } from 'react-bootstrap'
import './login.css'
import imgSelect from '../img/descarga.png'
const Login = () => {
  return (
    <div className='fondo'>
      <navbar className='img-contenedor2'>
          <img src={imgSelect}/>
          <h6>Experiencia laboral</h6>
          <p>¿Tienes experiencia que añadir?</p>
      </navbar>
      <div className='form'>
      <Form className='zindex-2'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prueba</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default Login
