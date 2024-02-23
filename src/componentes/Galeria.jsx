import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yo from '../assets/img/yo.jpg'
import log1 from '../assets/img/galeria/loggin1.png'
import log2 from '../assets/img/galeria/login2.png'
import comp from '../assets/img/galeria/componente.png'
import pay from '../assets/img/galeria/pago.png'
import sist from '../assets/img/galeria/sistema.png'
import sist2 from '../assets/img/galeria/sistemaAc.png'
import pay2 from '../assets/img/galeria/pago2.png'
import status from '../assets/img/galeria/status.png'
import log3 from '../assets/img/galeria/login3.png'

const Galeria = ({btnClose,slideOpen}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // El ancho de la pantalla en el que se activará esta configuración
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const arraySliders=[
    {id:1, conten:[pay,pay2,status],descripcion:"Eh podido integrar pasarelas de pago tanto de mercado libre, Open pay (BBVA) y Red Pay estas algunas han sido integradas en php y js , partiendo de un diseño original y propio, simple pero y agradable a la vista  "},
    {id:2,conten:[log1,log2,log3],descripcion:"Eh crado diferentes Loggins con diseños muy originales, basados en react, html y php; siempre mantenido un diseño original y amigable; ademas de integrar algunos componentes para aumentar las funcionalidades o el mantenimiento del sitio"},
    {id:3,conten:[sist,sist2,yo],descripcion:"Tambien eh trabajado en proyectos de sitemas de reistros y afiliaciones que se adaptan a las necesidades de el cliente; siempre  colaborando de la mano con este para dar los mejores resultados  "}
  ]


  return (
    <div className={`ContenGallery ${slideOpen&&"openSlide"}`}>
      <header className='headerGallery'>
        <h4>GALLERIA DE PROYECTOS</h4>
        <span class="material-symbols-outlined btn-close" onClick={btnClose}>
        disabled_by_default
        </span>
      </header>

      <div>
     {
      arraySliders.map(S=>(
        <div >
         <Slider key={S.id} {...settings} className='slider'>
        {
          S.conten.map((C,index)=>(
          <div key={index}>
            <img src={C} alt="imagen1" />
          </div>
          ))
        }
      </Slider>
      <p key={S.id}>
        {
          S.descripcion
        }
      </p>
        </div>
      ))
     }
      </div>

    </div>
  )
}
export default Galeria
