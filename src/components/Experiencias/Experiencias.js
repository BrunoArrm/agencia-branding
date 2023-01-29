import React from 'react';
import CardsExperiencia from './CardsExperiencia/CardsExperiencia';
import './Experiencias.css';

function Experiencias( props ) {

  return (

    <section className={ props.modo + "__experiencias" }>

      <h2>Experiências De Trabalho</h2>

      <div className='experiencias__linha'></div>

      <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p> 

      <CardsExperiencia 
        modo = { props.modo } />

    </section>

  )
}

export default Experiencias;