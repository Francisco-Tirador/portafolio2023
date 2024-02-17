import { useState } from 'react'
import './App.css'
import './assets/style/responsive.css'
import Config from './componentes/Config'
import Header from './componentes/Header'
import Present from './componentes/Present'
import Sectiones from './componentes/Sectiones'
import Habilidades from './sections/Habilidades'
import Contacto from './sections/Contacto'
import HeaderMobile from './componentes/HeaderMobile'
import Proyectos from './sections/Proyectos'
import Toasts from './componentes/Toasts'




function App() {
  const [message, setMessage] = useState(false)//Nota SliderPrincipal almacena quin tendra la poscion de vista 
  const [SliderPrincipal, setSliderPrincipal] = useState(1)//Nota SliderPrincipal almacena quin tendra la poscion de vista 
  const [Antes, setAntes] = useState(4)//Nota Antes almacena a quien se regresa para poder hacer la animacion de regreso
  const [Lado, setLado] = useState(0)//Nota aqui se deside si la animacion sera derecha izquierda dependiendo del 0 a 1
  const RotacionSuma = () => {

    setLado(1) //Nota va a la izquierda
    if (SliderPrincipal == 4) {
      setAntes(SliderPrincipal)
      setSliderPrincipal(1)
    } else {
      setAntes(SliderPrincipal)
      setSliderPrincipal(SliderPrincipal + 1)
    }
  }

  const RotacionResta = () => {
    setLado(0);//Nota va a la derecha
    if (SliderPrincipal == 1) {
      setAntes(SliderPrincipal)
      setSliderPrincipal(4)
    } else {
      setAntes(SliderPrincipal)
      setSliderPrincipal(SliderPrincipal - 1)
    }
  };


  const arrayComponet = [
    { componente: <Present />, id: 1 },
    { componente: <Habilidades />, id: 2 },
    { componente: <Proyectos />, id: 3 },
    { componente: <Contacto toast={setMessage} />, id: 4 }
  ]


  return (
    <div className="App">
      {message&&<Toasts message={message} />}
      <Header />
      <HeaderMobile/>
      <Config />
      <Sectiones />
      <div>
        <div className='Rotador'>

          <div className='Contenbtns'>
            <button onClick={RotacionResta} className='btnCambio mar' >
              <span class="material-symbols-outlined">
                arrow_back_ios
              </span>
            </button>
            <button onClick={RotacionSuma} className='btnCambio' >
              <span class="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>

          {
            arrayComponet.map(componente => (
              <div key={componente.id}
                className={`Resto ${SliderPrincipal == componente.id && Lado == 0 ? " RotaX" :
                    SliderPrincipal == componente.id && Lado == 1 ? " RotaY" :
                      Antes == componente.id && Lado == 0 ? "Rota" :
                        Antes == componente.id && Lado == 1 ? " Rota RotacionRegreso" :
                          "displaynone"
                  }`}>
                {componente.componente}

              </div>

            ))
          }

        </div>
      <div className='ContenDev'>
      {
          arrayComponet.map((componente) => (
            <span key={componente.id} class="material-symbols-outlined">
            {componente.id==SliderPrincipal?"radio_button_checked":"radio_button_unchecked"}
            </span>
            
          ))
        }
      </div>
      </div>

    </div>
  )
}

export default App
