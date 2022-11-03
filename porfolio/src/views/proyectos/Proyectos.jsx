import React from 'react';
import './proyectos.scss';
import Ecommerce from '../../images/E-Commerce.png';

const Proyectos = () => {
  return (
    <div className='proyectos-Container'>
        <h2 className='proyectos-titulo'>Proyectos</h2>
        <div className='proyectos-Info-Container'>
            <img src={Ecommerce} alt="Proyecto E-Commerce" />
            <h3 className='proyectos-tecnologias-usadas'>E-Commerce</h3>
            <p className='proyectos-tecnologias-usadas'>Tecnologias Usadas: React, GitHub, FireBase</p>
        </div>
        <div className='proyectos-Proximamente'>
            <h3>Proximamente...</h3>
        </div>
        <div className='proyectos-Proximamente'>
            <h3>Proximamente...</h3>
        </div>
    </div>
  )
}

export default Proyectos