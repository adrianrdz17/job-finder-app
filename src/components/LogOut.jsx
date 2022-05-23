import {useContext} from 'react'
import {authContext} from '../Context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const [logueado,setLogueado] = useState(true)
  const navigate = useNavigate()
  const context = useContext(authContext)

  const redirect = () => {
    setLogueado(false)
    if(logueado){
      navigate('/acceder',{
        replace:true
      })
    }
    console.log(logueado)
  }  
  const cerrarSesion = () =>{
    localStorage.removeItem('token')
    context.setAuth({
        logged: false,
        name:'',
        id: ''
    })
    redirect()
  }
    return (
    <>
        <button onClick={cerrarSesion} className='btn btn-primary'>
            cerrar sesión
        </button>
    </>
  )
}

export default LogOut