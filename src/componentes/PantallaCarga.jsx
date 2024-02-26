import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logoTransparante.png'

const PantallaCarga = () => {
    const [cargando,setCargando]=useState(true)
    
    useEffect(() => {
        setTimeout(() => {
          setCargando(false);
      
        }, 3000);
      }, [cargando])


  return (
    <div className={`${!cargando? "displaynone":"pantalla-carga"}  `}>
      <img src={logo} className='logoCarga'  alt="" />
    </div>
  )
}

export default PantallaCarga
