import { useState } from 'react'
import './App.css'
import Config from './componentes/Config'
import Header from './componentes/Header'
import Present from './componentes/Present'
import Sectiones from './componentes/Sectiones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Dividor from './componentes/Dividor'
import Habilidades from './sections/Habilidades'
import Portafolio from './sections/Portafolio'




function App() {
  const [count, setCount] = useState(1)
  const [Antes, setAntes] = useState(4)
  const [Activo, setActivo] = useState(0)

  const RotacionSuma=()=>{
    setActivo(0)
   if(count==4){
    setAntes(count)
    setCount(1)
   }else{
    setAntes(count)
    setCount(count+1)
   }
  }
  const RotacionResta=()=>{
  
  setActivo(1)
  // if(Antes==1||count==1){
  //   if(Antes==4){
  //     setAntes(4)
  //     setCount(1)
  //   }else
  //   if(Antes==1){
  //     setAntes(4)
  //     setCount(1)
  //   }else
  //  if(count==1){
  //   setCount(4)
    
  //  }}
   
  //  else{
  //   setCount(count-1)
  //   setAntes(Antes-1)
  //  }
  
 if(Antes!=4){
  setAntes(1)
  setCount(count-1)
 }else{
  setAntes(Antes-1)
  setCount(count-1)
 }
  }


  return (
    <div className="App">
      <h2 className='asddd'>{Antes}</h2>
     
      <div className='colapso'></div>
      <button onClick={RotacionResta} className='btnCambio mar' >Resta</button>
      <button onClick={RotacionSuma} className='btnCambio' >Suma</button>
     <Header/>  <h1 className='asddd'>{count}</h1 >
     <Config/>
     
     <Sectiones/>
    <div className='Rotador'>

    <div id='as' className={count==1&&Activo==0?"Resto  RotaX":Antes==1&&Activo==1?"Resto  RotaY":Activo==0?"Resto Rota":"Resto Rota RotacionRegreso"}>
      <Present/>     
     </div>

     <div id='23' className={count==2&&Activo==0?"Resto  RotaX":Antes==2&&Activo==1?"Resto  RotaY":Activo==0?"Resto  Rota":"Resto Rota RotacionRegreso"}>
     <Habilidades/>
     </div>
     <div  className={count==3&&Activo==0?"Resto RotaX":Antes==3&&Activo==1?"Resto  RotaY":Activo==0?"Resto Rota":"Resto Rota RotacionRegreso"}>
     <Portafolio/>
     </div>
     <div  className={count==4&&Activo==0?"Resto RotaX":Antes==4&&Activo==1?"Resto  RotaY":Activo==0?"Resto Rota":"Resto Rota RotacionRegreso"}>
     <Portafolio/>
     </div>
     
    </div>
     
    
     <div className='colapso'></div>
    </div>
  )
}

export default App
