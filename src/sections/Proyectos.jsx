import React from 'react'
import pokebola from '../assets/img/proyectos/pokebola.png'
import logoPokemon from '../assets/img/proyectos/logoPokemon.png'
import charmander from '../assets/img/proyectos/charmander.png'
import fondoRick from '../assets/img/proyectos/fondoRick.png'
import personajeRick from '../assets/img/proyectos/ricks.png'
import logoRick from '../assets/img/proyectos/logoRick.png'





const Proyectos = () => {

 const ArrayProyects=[
    {id:1,imagenFondo:pokebola,logo:logoPokemon,personaje:charmander,descripcion:"Este proyecto web hace referencia a la famosa serie Pokémon utilizando su amplia gama de personajes aprovechándolos para explorar las diferentes formas de búsqueda de estos; construido en React, trabajando con la experiencia de usuario y la api.",titulo:"POKEDEX",year:"2022",page:"https://api-pokedex-francisco.netlify.app/",git:"https://github.com/Francisco-Tirador/PokedexApi"},
    {id:2,imagenFondo:fondoRick,logo:logoRick,personaje:personajeRick,descripcion:"Este proyecto web ocupa los personajes de la serie Rick and Morty, tomado esta información para ver estos personajes en sus respectivos universos, construido en React, utilizando redux, y sus apis correspondientes.",titulo:"Rick and Morty",year:"2022",page:"https://rickymort.netlify.app/",git:"https://github.com/Francisco-Tirador/rick"}
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
          <div className='contenInfoProyetc '>
            <b>{P.titulo} - {P.year} </b>
            <span className='infoProyect'>
            {
              P.descripcion
            }
            </span>
            <div className='contenBtn col-12'>
              <a target='_blank'href={P.git}  className='btn-secundario '>Git</a>
              <a target='_blank'href={P.page} className='btn-secundario '>Ver Proyecto</a>
            </div>
          </div>
         </div>
        ))
       }
    </div>
  )
}

export default Proyectos