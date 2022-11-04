import React from 'react'
import './sobreMi.scss';
import FotoPor from '../../images/FotoPor.jpg';
import CV from '../../documents/CV NICO.pdf';

const SobreMi = () => {
  return (
    <div className='sobre-Mi-Container'>
      <h2 className='sobre-Mi-Titutlo'>Sobre Mi</h2>
      <div className='sobre-Mi-Info-Container'>
        <img className='sobre-Mi-Foto' src={FotoPor} alt="Foto del Porfolio"/>
        <p className='sobre-Mi-Texto'>Me llamo Nicolas Tissoni, tengo 22 años y me enfoco en mejorar dia a dia</p>
        <div className='sobre-Mi-Iconos-Container'>
          <a href="https://www.linkedin.com/in/nicolas-tissoni-9b4838207/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/NicolasTissoni" target='_blank'><i className="fa-brands fa-github"></i></a>
          <a href={CV} target='_blank'>CV</a>
        </div>
      </div>
    </div>
  )
}

export default SobreMi;