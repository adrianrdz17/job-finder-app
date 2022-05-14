import './login.css'
import imgSelect from '../img/descarga.png'
const Login = () => {
  return (
    <div className='fondo'>
      <header id='img-contenedor2'>
          <img src={imgSelect}/>
          <h6>Experiencia laboral</h6>
          <p>¿Tienes experiencia que añadir?</p>
      </header>
      <main className='contenedor-form'>
      <form className='form'>
        <fieldset id='field-hijo-1'>
        <h3>Datos personales</h3>
        <label>Nombre</label>
        <input type="text"/>
        <label>Apellido</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Pais de residencia</label>
        <input type="text" />
        <label>DNI</label>
        <input type="text" />
        <label>Nacionalidad</label>
        <input type="text" />
        <label>Teléfono</label>
        <input type='text'/>
        <select>
          <option>Celular/Móvil</option>
          <option>Fijo</option>
        </select>
        <label>Fecha de nacimiento</label>
        <input type="text" />
        <label>Género</label>
        <input type="text" />
        </fieldset>
        <fieldset id='field-hijo-2'>
          <h3>Trabajo y educacion</h3>
          <label>Adjuntar CV</label>
          <input type='file'/>
        </fieldset>
        
        <fieldset id='field-hijo-3'>
          <h3>Expectativas personales</h3>
          <label>Remuneracion pretendida:</label>
          <input type='number'/>
          <label>Mensaje adicional</label>
          <textarea placeholder='Mensaje adicional para el reclutador'>
          </textarea>
        </fieldset>
      <button>Enviar</button>
      </form>
      </main>

    </div>
  )
}

export default Login
