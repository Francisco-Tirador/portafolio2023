import React, { useState } from 'react'
import pokebola from '../assets/img/proyectos/pokebola.png'
import logoPokemon from '../assets/img/proyectos/logoPokemon.png'
import charmander from '../assets/img/proyectos/charmander.png'
import fondoRick from '../assets/img/proyectos/fondoRick.png'
import personajeRick from '../assets/img/proyectos/ricks.png'
import logoRick from '../assets/img/proyectos/logoRick.png'
import fondoGaleria from '../assets/img/proyectos/galeria.png'
import iconosGaleria from '../assets/img/proyectos/iconosGaleria.png'
import galeriaTitulo from '../assets/img/proyectos/galeriaTitulo.png'
import Galeria from '../componentes/Galeria'





const Proyectos = () => {
  const [gallery,setGalery]=useState(false)

  const ArrayProyects = [

    { id: 2, imagenFondo: fondoGaleria, logo: galeriaTitulo, personaje: iconosGaleria, descripcion: "Esta es una galeria con algunas imagenes y videos donde muestro algunos componentes y proyectso que realice en mi estancia laboral", titulo: "Galeria Proyectos Laborales", year: "2023", page: "https://rickymort.netlify.app/", git: "https://github.com/Francisco-Tirador/rick" },
    { id: 3, imagenFondo: pokebola, logo: logoPokemon, personaje: charmander, descripcion: "Este proyecto web hace referencia a la famosa serie Pokémon utilizando su amplia gama de personajes aprovechándolos para explorar las diferentes formas de búsqueda de estos; construido en React, trabajando con la experiencia de usuario y la api.", titulo: "POKEDEX", year: "2022", page: "https://api-pokedex-francisco.netlify.app/", git: "https://github.com/Francisco-Tirador/PokedexApi" },
    { id: 4, imagenFondo: fondoRick, logo: logoRick, personaje: personajeRick, descripcion: "Este proyecto web ocupa los personajes de la serie Rick and Morty, tomado esta información para ver estos personajes en sus respectivos universos, construido en React, utilizando redux, y sus apis correspondientes.", titulo: "Rick and Morty", year: "2022", page: "https://rickymort.netlify.app/", git: "https://github.com/Francisco-Tirador/rick" }

  ]

  const toggleGallery=()=>{
    setGalery(!gallery)
  }

  return (
  
    <div className='center contenCara col-12 '>
      <h2 className='apt FirstText'>Proyectos</h2>
      {
          gallery&&
          <Galeria btnClose={toggleGallery}  />
      }
      {
        ArrayProyects.map(P => (
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
               {
                P.id!=2?
                <>
                <a target='_blank' href={P.git} className='btn-secundario '>Git</a>
                <a target='_blank' href={P.page} className='btn-secundario '>Ver Proyecto</a>
                </>
                :
                <button target='_blank' onClick={toggleGallery}  className='btn-secundario '>Ver Galeria</button>
               }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Proyectos