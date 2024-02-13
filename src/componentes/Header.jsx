import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoF from '../assets/img/{f}.png'
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
            </div>
            <div>

            <FontAwesomeIcon className='Icon-config' icon={faEnvelope} />
            <FontAwesomeIcon className='Icon-config'icon={faWhatsapp} />
            </div>
            <div>
                <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3670/3670125.png" alt="Imstagram Francisco Beltran" />
                <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github Francisco Beltran" />
                <img className='Icon ' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="Linkedin Francisco Beltran" />
            </div>

            
        </div>
    </div>
  )
}

export default Header





