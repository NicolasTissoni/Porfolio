import React, { useState } from 'react'
import './navBarContainer.scss';

const NavBarContainer = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
      <ul className = 'navBar-container'>
        
        <label for = "check" className = 'bar' >
          <input id = "check" type = "checkbox" onClick = {toggleMenu}/>
          <span className = "top"></span>
          <span className = "middle"></span>
          <span className = "bottom"></span>
        </label>
          <h1 className = 'tittle'>Nicolas Tissoni</h1>
        <div className = {`li-contenedor ${menu ? 'active' : null}`}>
          <li className='li-nav' id='1'><a className = 'navBar-contenido' href="#1">Sobre Mi</a></li>
          <li className='li-nav' id='2'><a className = 'navBar-contenido' href="#2">Tecnologias</a></li>
          <li className='li-nav' id='3'><a className = 'navBar-contenido' href="#3">Proyectos</a></li>
        </div>
      </ul>
  )
}
 
export default NavBarContainer;