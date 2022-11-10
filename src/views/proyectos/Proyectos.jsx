import React from 'react';
import './proyectos.scss';
import Ecommerce from '../../images/E-Commerce.png';
import Peliculas from '../../images/Peliculas-Proyecto.png';

const Proyectos = () => {
  return (
    <div className='proyectos-Container' id='3'>
        <h2 className='proyectos-titulo'>Proyectos</h2>
        <div className='proyectos-Info-Container'>
            <img src={Ecommerce} alt="Proyecto E-Commerce" />
            <h3 className='proyectos-tecnologias-usadas'>E-Commerce</h3>
            <a href="https://nicolastissoni.github.io/Curso-React/" target='_blank'>
              <div className="overlay">
                <div className="overlay-text">
                  <h2>Tecnologias Usadas:</h2>
                  <p>React, FireBase, Sass, Node.js</p>
                </div>
              </div>
            </a>
        </div>
        <div className='proyectos-Info-Container'>
            <img src={Peliculas} alt="Proyecto-Peliculas" />
            <h3 className='proyectos-tecnologias-usadas'>E-Commerce</h3>
            <a href="https://peliculasproyecto.netlify.app" target='_blank'>
              <div className="overlay">
                <div className="overlay-text">
                  <h2>Tecnologias Usadas:</h2>
                  <p>React, Sass, Node.js</p>
                </div>
              </div>
            </a>
        </div>
        <div className='proyectos-Proximamente'>
            <h3>Proximamente...</h3>
        </div>
    </div>
  )
}

export default Proyectos