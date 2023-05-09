import React from 'react'
import Yo from '../assets/img/yo.jpg'

const Present = () => {
  return (
    <div className='Center'>
<div className='col-6'><img className='img-YO' src={Yo} alt="" /></div>
   <div className='col-6'>
   <h2 className='apt FirstText'>Sobre mi</h2>
    <p>
    Hola, soy <b >Francisco Beltrán</b>, <b className='text-inportant'>técnico en diseño gráfico y Programador Full stack</b> , amante de la programación,
     tecnología, diseño, ilustración y el dibujo en general; pongo mis servicios a tu disposición como diseñador y programador de <b className='text-inportant'>páginas web y aplicaciones mobiles </b>
     para ayudarte con algún pequeño proyecto de llevar la presentación de tu negocio o artículos al siguiente nivel online.
        <br />
    Saludos !!!
    </p>

    <span className='btn'>
      DESCARGAR CURRÍCULUM
    </span>
   </div>
    </div>
  )
}

export default Present