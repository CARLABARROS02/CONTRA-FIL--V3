import './App.css';
import React from 'react';
import Cabecalho from './Componentes/Cabecalho/Cabecalho';
import Lancamentos from './Componentes/Lancamentos/Lancamentos';
import Rodape from './Componentes/Rodape/Rodape';
import SuperPromo from './Componentes/SuperPromo/SuperPromo';
import Sobre from './Componentes/Sobre/Sobre';
import Acesso from './Componentes/AcessosPrincipais/AcessosPrincipais';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Inicio">
      <Cabecalho />

      <SuperPromo />

      <Sobre />

      <Lancamentos />

      <Acesso/>

       <Rodape />

        </div>
      </header>
    </div>
  );
}

export default App;
