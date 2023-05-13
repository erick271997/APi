
import { useEffect, useState } from 'react';


function App() {
  const[datos, setdatos]= useState ([]);
  

useEffect(()=>{
const url= "https://randomuser.me/api/?results=3";
const peticion=fetch(url);

peticion
      .then(datos => datos.json())
      .then(lectura => {
        lectura.results.map((persona)=>{

        
          setdatos((e)=>

        
         [ ...e ,<div key={persona.email}>
            <div>{persona.name.first} {persona.name.last}</div>
          <div>
            <img src={persona.picture.large} alt='imagen'/>
          </div>
          
          </div>  ]
          )
        })
      })
      .catch(() => console.log('Mal'))


  }, [])


  return (
    <>
      <h1>Empleado/a</h1>
      {datos}
 
      <div>
      </div>
    </>
  );
}

export default App;
