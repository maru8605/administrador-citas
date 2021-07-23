import {useState, useEffect} from 'react';
import Formulario from './component/Formulario.js'
import Cita from './component/Cita.js';

function App() {
  
  // localstorage
  let citasInic = JSON.parse(localStorage.getItem('citas'));
  if(!citasInic){
    citasInic = []
  }

  //Arr de citas
  const [citas, setCitas] = useState(citasInic)

  useEffect( () => {
    if(citasInic){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas])

  //fn toma citas existentes + agrega nueva 
  const crearCita = cita =>{
    setCitas([...citas, cita]);
  }
  
  //fn eliminar cita x id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter( cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  //msj condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus citas'
  return (
    <div className="App">
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
             {citas.map(cita => (
               <Cita
               key={cita.id}
               cita={cita}
               eliminarCita={eliminarCita}/>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
