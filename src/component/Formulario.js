import {useState} from 'react';

const Formulario = ( {crearCita} ) => {
   
    const [cita, setCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas:''
    })

    const [error, setError] = useState(false)

    //leer los imputs y colocar los datos en el state
    const handleChange = (e) =>{
       setCita({
           ...cita , //copia del objeto
           [e.target.name] : e.target.value //nuevos valores agregados 
       })
    }

    //extraer los valores 
    const { mascota, dueño, fecha, hora, sintomas} = cita; 
 
    const submitCita = (e) =>{
        e.preventDefault(); 
        //validar form
        if( mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            setError(true)
            return; 
        }
        //eliminar msj previo
        setError(false)

        //asigna ID
        cita.id = Math.floor(Math.random() * 10000) + 1
       
        //crear cita
        crearCita(cita)

        //reset del form
        setCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas:''
        })
    }

    return (
        <>
           <h2>Crear Citas</h2> 

            {error ? <p className='alerta-error'>Todos Los campos son obligatorios</p> : null}
           <form
             onSubmit={submitCita}
           >
               <label>Nombre Mascota</label>
               <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={handleChange}
                    value={mascota}
                    />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='dueño'
                    className='u-full-width'
                    placeholder='Nombre Dueño'
                    onChange={handleChange}
                    value={dueño}/>    
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                    value={fecha}/>
                <label>Hora</label>
               <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                    value={hora}/>
                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={handleChange}
                    value={sintomas}
                ></textarea> 
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Citas</button>  
           </form>
        </>
    )
}

export default Formulario
