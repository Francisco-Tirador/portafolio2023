import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoF from '../assets/img/logoFranco.png'
import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <img className='ImgHeader' src={logoF} alt="Logo Francisco Beltran" />
      <div>
        <div >
          <h2 className='TextHeader'>Hola soy</h2>
          <h1 className='FirstText'>Francisco Beltran</h1>
          <h2 className='TextHeader'>Desarrollador Front end y diseñador</h2>
        <a href="https://drive.google.com/file/d/1TX0lguraXb1gXzgaT7yn0oT0QoIzYH4U/view?usp=sharing" target='_blank'>
          <button  className='btn-secundario margin'>
            DESCARGAR CURRÍCULUM
          </button>
          </a>
        </div>


        <div className='contenRedes'>
          <div>

           <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnqHwvDpPGbgfsJrxqgPCDPTDMTMnLTLhqLGpgVfsNXtpmrdlBRwlJbBllDJbJMXsvJFsv" target='_blank'> <FontAwesomeIcon className='Icon-config' icon={faEnvelope} /></a>
           <a href="https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20con%20tigo&type=phone_number&app_absent=0" target='_blank'> <FontAwesomeIcon className='Icon-config' icon={faWhatsapp} /></a>
          </div>
          <div>

           <a href="https://www.instagram.com/beltranbolibar/" target='_blank' > <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3670/3670125.png" alt="Imstagram Francisco Beltran" /></a>
           <a href="https://github.com/Francisco-Tirador" target='_blank' ><img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github Francisco Beltran" /></a>
           <a href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target='_blank' > <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin Francisco Beltran" /></a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header





