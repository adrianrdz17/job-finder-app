import './login.css';
import imgSelect from '../img/descarga.png';
import { useState, useRef } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import { post } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [value, setValue] = useState({
        name: '',
        lastname: '',
        email: '',
        role: '',
        password: '',
    })
    const form = useRef();
    const navigate = useNavigate();


    const signUp = (event) =>{
      event.preventDefault()

      post("/api/auth/login",{ 
          name:form.name.current.value,
          lastName:form.name.current.value,
          email: form.email.current.value,
          password:form.password.current.value,
          role:form.role.current.value
      })
      .then(data=>{
          const {token,user} = data.data
          localStorage.setItem("token",token) 
          context.setAuth({
              id:user.id,
              name:user.name,
              logged:true
          })
          navigate("/",{
              replace:true
          })
      })
    
    } 
    const handleChange = (e) => {
        setValue((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <div className="fondo">
            <header id="img-contenedor2">
                <img src={imgSelect} />
                <h6>Experiencia laboral</h6>
                <p>¿Tienes experiencia que añadir?</p>
            </header>
            <main className="container-fluid d-flex justify-content-center w-50">
                <form ref={form} className="mb-3 w-50 mt-3 shadow p-3 mb-5 bg-body rounded" onSubmit={signUp}>
                    <div className="mb-3">
                        <input
                            type="text"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Nombre"
                            value={value.name}
                            name="name"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Apellido"
                            value={value.lastname}
                            name="lastname"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Correo
                            ref={email}"
                            value={value.email}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Contraseña"
                            value={value.password}
                            name="password"
                        />
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-control"
                            name="role"
                            onChange={handleChange}
                            value={value.role}
                        >
                            <option value="">-Seleccione una opción--</option>
                            <option value="applicant">Aplicante</option>
                            <option value="employer">Empleador</option>
                        </select>
                    </div>

                    <button className="btn btn-primary">Enviar</button>
                </form>
            </main>
        </div>
    );
};

export default Login;
