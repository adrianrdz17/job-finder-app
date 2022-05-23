import "./signUp.css";
import imgSelect from "../img/descarga.png";
import { useState,useRef, useContext } from "react";
import { authContext } from "../Context/AuthContext";
import { post } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const context = useContext(authContext);
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const role = useRef()

  const navigate = useNavigate();

  const [error,setError] = useState({
    isError:false,
    message:"",
    loading:false
  })
  const signUp =  async (event) =>{
    event.preventDefault()

    console.log(role.current.value)
    setError({...error,loading:true})
    post("/api/auth/signup",{
      name:name.current.value,
      email: email.current.value,
      password:password.current.value,
      role:role.current.value
    })
    .then(({data})=>{
      setError({...error,loading:false})
      localStorage.setItem("token",data.token)
      context.setAuth({
        id:data.user.id,
        name:data.user.name,
        logged:true
      })
    },
    await navigate('/',{
      replace:true
    })
    )
    .catch(error=>{
      console.log(error.response.data)
      setError({
        isError:true,
        message:error.response.data.message,
        loading:false
      })
    })

}

    return (
      <div className="fondo">
        <header id="img-contenedor2">
          <img src={imgSelect}/>
          <h6>¿Inseguro al conseguir empleo?</h6>
          <p>Nosotros lo resolvemos. No esperes mas, crea tu usuario</p>
        </header>
        <main className="container-fluid d-flex justify-content-center w-100">
          <form
            className="formulario"
            onSubmit={signUp}
          >
            <div className="mb-3">
              <input
                ref={name}
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="name"
              />
            </div>
            <div className="mb-3">
            </div>
            <div className="mb-3">
              <input
                ref={email}
                type="email"
                className="form-control"
                placeholder="Correo"
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                ref={password}
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
              />
            </div>
            <div className="mb-3">
              <select
                ref={role}
                className="form-control"
                name="role"
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
