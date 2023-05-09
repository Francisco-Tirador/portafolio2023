import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Config = () => {
  return (
    <div className='ContenConfig'>
        <span><FontAwesomeIcon className="Icon-config" icon={faGear} /></span>
        <span><FontAwesomeIcon className="Icon-config" icon={faGear} /></span>
        <span><FontAwesomeIcon className="Icon-config" icon={faGear} /></span>
       </div>
  )
}

export default Config