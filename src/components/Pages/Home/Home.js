import React from 'react';
import './Home.css';
import Banner from '../../Banner/Banner';
import Experiencias from '../../Experiencias/Experiencias';

function Home( props ) {

  return (
    <main className='principal'>
        <Banner modo = { props.modo }/>
        <Experiencias 
          modo = { props.modo }/>
    </main>
  )
}

export default Home;