import React from 'react'
import './tecnologias.scss';

const Tecnologias = () => {
  return (
    <div className='tecnologias-Container' id='2'>
        <h2 className='tecnologias-Titulo'>Tecnologias</h2>
        <div className='tecnologias-Iconos'>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-sass"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/></svg>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-node"></i>
        </div>
    </div>
  )
}

export default Tecnologias