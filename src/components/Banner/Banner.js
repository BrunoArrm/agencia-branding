import React from 'react';
import './Banner.css';

function Banner( props ) {

  let modo = props.modo;
  let esquerdaClassName = modo + "--esquerda";

  return (
    <section className='light--secaoBanner'>
      <div className={ esquerdaClassName } id='halfBanner'>

      </div>
      <div className='light--direita' id='halfBanner'>
        <h1>BRANDING / UI / UX / TECNOLOGIA</h1>
        <p>Agência de Branding</p>
        <p><span>e design digital</span></p>
      </div>
    </section>
  )
}

export default Banner;