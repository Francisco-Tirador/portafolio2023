import { useState } from 'react'
import './App.css'
import Config from './componentes/Config'
import Header from './componentes/Header'
import Present from './componentes/Present'
import Sectiones from './componentes/Sectiones'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='colapso'></div>
     <Header/>
     <Config/>
     <Sectiones/>
     <div className='Resto'>
      <Present/>

      <div  ><iframe src='https://gfycat.com/ifr/AccurateLimpingAchillestang' frameborder='0'  width='30%' height='10%'  allowfullscreen></iframe></div><p> <a href="https://gfycat.com/accuratelimpingachillestang-film-animation-after-effects-freefootage">via Gfycat</a></p>

     </div>
     

     <div className='colapso'></div>
    </div>
  )
}

export default App
