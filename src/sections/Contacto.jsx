import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

const Contacto = ({toast}) => {
  
  const { handleSubmit, register, reset } = useForm()
  const [stateBtn,setStateBtn]=useState(false)


  const submitMessage=(data)=>{
      setStateBtn(1)

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
        reset({
          message:""
        })
        setStateBtn(2)
        setTimeout(() => {
          setStateBtn(false);
        }, 5000);
      })
      .catch(res=>{
        setStateBtn(false)
      })

  }


  return (
    <>

   
    <div className='center contenCara noneScrol '>
      
      <h2 className='apt FirstText'>Contacto</h2>
      <div className='ContenForm'>
        <h3 className='textPrincipal textForm'>¡Hablemos sobre de tu idea!</h3>
        <form onSubmit={handleSubmit(submitMessage)} id='formContacto'>
          <label htmlFor="">Nombre</label>

          <span >
            <span class="material-symbols-outlined iconForm">
              account_circle
            </span>
            <input type="text" placeholder='Nombre' {...register("nombre")} required/>
          </span>
          <label htmlFor="">Correo</label>
          <span>
          <span class="material-symbols-outlined iconForm">
             mail
          </span>
          <input type="email" placeholder='example@example.com' {...register("email")} required/>
          </span>
          
          <textarea  {...register("message")}name="message" cols="30" rows="10" placeholder='Escribe tu mensaje' required>

          </textarea>
          
        </form>
        <button className='btn ' form='formContacto'>
          {
          !stateBtn?
          "Enviar":
          stateBtn==1?
          <span class="material-symbols-outlined rotate">
          rotate_right
          </span>:
          <span class="material-symbols-outlined">
          check_circle
          </span>
          }
        </button>
      </div>



    </div>
    </>
  )
}

export default Contacto
