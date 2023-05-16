import { useState } from 'react'
import './App.css'
import Config from './componentes/Config'
import Header from './componentes/Header'
import Present from './componentes/Present'
import Sectiones from './componentes/Sectiones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Dividor from './componentes/Dividor'




function App() {
  const [count, setCount] = useState(false)

  const Rotacion=()=>{
    if(count){
      setCount(false)
    }else{
      setCount(true)
    }
  }


  return (
    <div className="App">
     
      <div className='colapso'></div>
     <a href="#sd"> <button className='btnCambio mar' >"hola"</button></a>
     <a href="#23"> <button className='btnCambio' >"hsla"</button></a>
     <Header/>
     <Config/>
     <Sectiones/>
    <div className='Rotador'>
    <div id='as' className={count?"Resto RotaX":"Resto Rota"}>
      <Present/>
      {/* <Dividor/> */}
     
     </div>

     <div id='23' className={!count?"Resto RotaX":"Resto Rota"}>
      <Present/>
     </div>
     
    </div>
     

     <div className='colapso'></div>
    </div>
  )
}

export default App
