import React from 'react';
import CardExperiencia from '../CardExperiencia/CardExperiencia';
import './CardsExperiencia.css';

function CardsExperiencia( props ) {
  return (
    <div className={ props.modo + '__cardsExperiencia' }>
        <CardExperiencia 
            periodo="JUNHO 2012 - 2016" funcao="Web Designer" corporacao="Pied Piper StartUp."
            funcaoDescricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
            modo={ props.modo } />

        <CardExperiencia 
            periodo="AGOSTO 2016 - 2019" funcao="Product Designer" corporacao="E corp"
            funcaoDescricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
            modo={ props.modo } />

        <CardExperiencia 
            periodo="FEVEREIRO 2019 - 2021" funcao="Digital Consulting" corporacao="Arasaka Inc."
            funcaoDescricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
            modo={ props.modo } />
    </div>
  )
}

export default CardsExperiencia;