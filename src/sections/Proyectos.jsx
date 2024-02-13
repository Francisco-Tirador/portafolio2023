import React from 'react'
import pokebola from '../assets/img/proyectos/pokebola.png'
import logoPokemon from '../assets/img/proyectos/logoPokemon.png'
import charmander from '../assets/img/proyectos/charmander.png'





const Proyectos = () => {




  return (
    <div className='center contenCara '>
        <h2 className='apt FirstText'>Proyectos</h2>
        <div className='contenProyecto'>
            <img className='fondoProyect' src={pokebola} alt="" />
            <img className='logoPoryect' src={logoPokemon} alt="" />
            <img className='personajeProyect' src={charmander} alt="" />  
        </div>
    </div>
  )
}

export default Proyectos