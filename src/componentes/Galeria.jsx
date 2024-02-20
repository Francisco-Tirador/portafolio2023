import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import yo from '../assets/img/yo.jpg'

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
    {id:1, conten:[yo,yo],descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod consequatur eaque tempora quas dolore harum fuga velit eligendi. Ad eos rerum itaque ducimus nulla sequi voluptatibus vitae reprehenderit velit."},
    {id:2,conten:[yo,yo,yo],descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod consequatur eaque tempora quas dolore harum fuga velit eligendi. Ad eos rerum itaque ducimus nulla sequi voluptatibus vitae reprehenderit velit."},
    {id:3,conten:[yo,yo,yo],descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod consequatur eaque tempora quas dolore harum fuga velit eligendi. Ad eos rerum itaque ducimus nulla sequi voluptatibus vitae reprehenderit velit."}
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
