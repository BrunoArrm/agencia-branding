import React from 'react';
import './CardExperiencia.css';

function CardExperiencia(props) {
  return (
    <div className= { props.modo + '__cardExperiencia' }>
        <h3 className='periodo'>{props.periodo}</h3>
        <h2 className='funcao'>{props.funcao}</h2>
        <h3 className='corporacao'>{props.corporacao}</h3>
        <p className='funcaoDescricao'>{props.funcaoDescricao}</p>
    </div>
  )
}

export default CardExperiencia;