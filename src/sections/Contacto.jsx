import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const Contacto = ({toast}) => {

  const { handleSubmit, register, reset } = useForm()

  const submitMessage=(data)=>{
    var fechaActual = new Date();
    var year = fechaActual.getFullYear();
    var month = fechaActual.getMonth() + 1; 
    var day = fechaActual.getDate();
    
    var dateActual = day + '/' + month + '/' + year;
    
    const dataInfo={
      date:dateActual,
      ...data
    };
    const url="https://65494591dd8ebcd4ab246ccd.mockapi.io/api/v1/comentarios";
    axios.post(url,dataInfo)
      .then(res=>{
        toast("Mensaje enviado, muchas gracias por contactarme")
      })
  }


  return (
    <>

   
    <div className='center contenCara noneScrol scrol_mobile'>
      
      <h2 className='apt FirstText'>Contacto</h2>
      <div className='ContenForm'>
        <h3 className='textPrincipal textForm'>¡Hablemos sobre de tu idea!</h3>
        <form onSubmit={handleSubmit(submitMessage)} id='formContacto'>
          <label htmlFor="">Nombre</label>

          <span >
            <span class="material-symbols-outlined iconForm">
              account_circle
            </span>
            <input type="text" placeholder='Nombre' {...register("nombre")} />
          </span>
          <label htmlFor="">Correo</label>
          <span>
          <span class="material-symbols-outlined iconForm">
             mail
          </span>
          <input type="email" placeholder='example@example.com' {...register("email")}/>
          </span>
          
          <textarea  {...register("message")}name="message" cols="30" rows="10" placeholder='Escribe tu mensaje'>

          </textarea>
          
        </form>
        <button className='btn ' form='formContacto'>Enviar</button>
      </div>



    </div>
    </>
  )
}

export default Contacto
