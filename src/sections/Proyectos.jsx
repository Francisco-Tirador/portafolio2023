import React from 'react'
import pokebola from '../assets/img/proyectos/pokebola.png'
import logoPokemon from '../assets/img/proyectos/logoPokemon.png'
import charmander from '../assets/img/proyectos/charmander.png'
import fondoRick from '../assets/img/proyectos/fondoRick.png'
import personajeRick from '../assets/img/proyectos/ricks.png'
import logoRick from '../assets/img/proyectos/logoRick.png'





const Proyectos = () => {

 const ArrayProyects=[
    {id:1,imagenFondo:pokebola,logo:logoPokemon,personaje:charmander},
    {id:2,imagenFondo:fondoRick,logo:logoRick,personaje:personajeRick}
  ]



  return (
    <div className='center contenCara col-12 '>
        <h2 className='apt FirstText'>Proyectos</h2>
       {
        ArrayProyects.map(P=>(
         <div className='boxContenProyect'>
           <div key={P.id} className='contenProyecto'>
              <img className='fondoProyect' src={P.imagenFondo} alt="" />
              <img className='logoPoryect' src={P.logo} alt="" />
              <img className='personajeProyect' src={P.personaje} alt="" />  
          </div>
          <div>

          </div>
         </div>
        ))
       }
    </div>
  )
}

export default Proyectos