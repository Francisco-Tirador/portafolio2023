import React from 'react'

const Galeria = ({btnClose}) => {
  return (
    <div className='ContenGallery'>
      <header className='headerGallery'>
        <h4>GALLERIA DE PROYECTOS</h4>
        <span class="material-symbols-outlined btn-close" onClick={btnClose}>
        disabled_by_default
        </span>
      </header>
      <div>

      </div>
    </div>
  )
}
export default Galeria
