import React from 'react'
import logo from '../assets/img/logoFranco.png'


const HeaderMobile = () => {
  return (
    <div className='HeaderMobile'>
      <img  src={logo} alt="" />
      <p className='FirstText'>FRENCISCO BELTRAN</p>  
      <span class="material-symbols-outlined ico_Toggle_Mobile">
        menu
        </span>
    </div>
  )
}

export default HeaderMobile
