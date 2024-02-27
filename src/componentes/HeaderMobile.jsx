import React, { useState } from 'react'
import logo from '../assets/img/logoFranco.png'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import close  from '../assets/icon/close.png';

const HeaderMobile = () => {
  const [toggleMenu,setToggleMenu]=useState(false);

  const toggle=()=>{
    setToggleMenu(!toggleMenu)
  }


  return (
   <>
    <div className='HeaderMobile'>
      <img src={logo} alt="" />
      <p className='FirstText'>FRENCISCO BELTRAN</p>
      <span class="material-symbols-outlined ico_Toggle_Mobile" onClick={toggle}>
        menu
      </span>
    </div>

    <div>

    <div className={`contenRedes menuMobile ${toggleMenu?"menu-open-mobile":"menu-close-mobile"} `}>
      <div className='boxContacMobile'>
      <div>

<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnqHwvDpPGbgfsJrxqgPCDPTDMTMnLTLhqLGpgVfsNXtpmrdlBRwlJbBllDJbJMXsvJFsv" target='_blank'> <FontAwesomeIcon className='Icon-config' icon={faEnvelope} /></a>
<a href="https://api.whatsapp.com/send/?phone=5215620397081&text=Hola%20me%20gustaria%20trabajar%20con%20tigo&type=phone_number&app_absent=0" target='_blank'> <FontAwesomeIcon className='Icon-config' icon={faWhatsapp} /></a>
</div>
<div>

<a href="https://www.instagram.com/beltranbolibar/" target='_blank' > <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3670/3670125.png" alt="Imstagram Francisco Beltran" /></a> 
<img src={close} className='btn-close' onClick={toggle} />



<a href="https://www.linkedin.com/in/francisco-beltr%C3%A1n-342a31213/" target='_blank' > <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin Francisco Beltran" /></a>
</div>
<a href="https://drive.google.com/file/d/1TX0lguraXb1gXzgaT7yn0oT0QoIzYH4U/view?usp=sharing" target='_blank'>
<button  className='btn-secundario margin'>
 DESCARGAR CURRÍCULUM
</button>
</a>
      </div>
        </div>
    </div>
   </>
  )
}

export default HeaderMobile
