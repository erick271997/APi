
import { useEffect, useState } from 'react';


function App() {
  const[nombre, setNombre]= useState=('');
  const[imagen, setImgane]= useState=('');

useEffect(()=>{
const url= " https://randomuser.me/api/ " ;
const peticion=fetch(url);

  peticion
  .then(datos=>datos.json())
  .then(lectura=>{
    setNombre(` ${lectura.results[0].name.first}` ` ${lectura.results[0].name.last}`)
  })
  .catch(()=>console.log('Mal'))

  },[])

  


  return (
    <>
      <h1>Empleado/a</h1>
      {nombre}
      <div>
        <img src={imagen} alt=""/>
      </div>
    </>
  );
}

export default App;
