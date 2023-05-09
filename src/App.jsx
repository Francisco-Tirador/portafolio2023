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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='colapso'></div>
     <Header/>
     <Config/>
     <Sectiones/>
     <div className='Resto'>
      <Present/>
      <Dividor/>
     
     </div>
     

     <div className='colapso'></div>
    </div>
  )
}

export default App
