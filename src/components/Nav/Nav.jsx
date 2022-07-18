import React from 'react'

import {Link} from 'react-router-dom'
import img from '../../img/clima (1).png'
import '../Nav/Nav.css'
import {AiOutlineInfoCircle} from 'react-icons/ai';

export default function Nav({}){
  return(
    <div className = 'navBar'>
      <nav className = 'navbar navbar-dark bg-dark navBar'>
        <Link to = '/Joaquin'>
          <span className = 'navbar-brand'>
          <ion-icon name="home-outline"></ion-icon>
          </span>
        </Link>
        <Link to = '/'>
          <span className = 'navbar-brand'><img
              id = 'logo'
              src = {img}
              width = '30'
              height = '30'
              className = 'd-inline-block align-top'
              alt = 'Imagen no encontrada'
            /></span>
        </Link>
        <Link to = '/CV'>
          <span className = 'navbar-brand'>
            CV
          </span>
        </Link>
      </nav>
    </div>
  )
}