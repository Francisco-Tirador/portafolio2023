import React from 'react'

const Contacto = () => {
  return (
    <div className='center contenCara noneScrol scrol_mobile'>
      <h2 className='apt FirstText'>Contacto</h2>
      <div className='ContenForm'>
        <h3 className='textPrincipal textForm'>¡Hablemos sobre de tu idea!</h3>
        <form action="">
          <label htmlFor="">Nombre</label>

          <span >
            <span class="material-symbols-outlined iconForm">
              account_circle
            </span>
            <input type="text" placeholder='Nombre' />
          </span>
          <label htmlFor="">Correo</label>
          <span>
          <span class="material-symbols-outlined iconForm">
          mail
          </span>
          <input type="email" placeholder='example@example.com' />
          </span>
         
          <textarea name="message" cols="30" rows="10" placeholder='Escribe tu mensaje'>

          </textarea>
        </form>
      </div>



    </div>
  )
}

export default Contacto
