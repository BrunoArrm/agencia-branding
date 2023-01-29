import React from 'react';
import './Topo.css';
import Logo from '../../assets/logo.png';
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

function Topo( props ) {

  let funcao = props.funcao;
  let modo = props.modo;
  let classeHeader = modo + "--topo";
  let classeButton = modo + "--button";

  return (
    <header className={ classeHeader }>

      <img src={ Logo } alt='Logomarca' title='Logomarca'></img>

      <button className={ classeButton } id='button' onClick={ funcao }>
        <img className='button-icone' src={ props.modo === "light" ? Moon : Sun }></img>
      </button>

    </header>
  )
}

export default Topo;