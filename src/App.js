import { useState } from 'react';
import './App.css';
import Topo from './components/Topo/Topo';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';

function App() {

  const [ modo, setModo ] = useState("light");

  const alteraModo = () => {
    modo === "light" ? setModo("dark") : setModo("light");
  }

  return (
    <>
    <Topo funcao = {alteraModo} modo = { modo } />
    <Home modo = { modo }/>
    <Footer modo = { modo }/>
    </>
  );
}

export default App;
