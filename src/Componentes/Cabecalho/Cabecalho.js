import React from "react"; //importar o react
import './index.css'
import { Link } from "react-router-dom";

//agora definir o cabeçalho/header como uma função: const Cabeçalho.... 
//irei utilizar a tag header para definir o cabeçalho e irei criar uma classe, pois terá uma estilização específica: <header className="header">
//criar uma div para a logo do site e o título do site: <div className="logo">

const Cabecalho = () => {
  return (
    <header >
      <nav className="cabecalho">
        <div className="logo">
          <img src="logo-contra-file-horizontal.png" alt="Contra Filé"></img>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#linkdosobre">Sobre & Empresa</a></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><a href="#linkdolancamentos">Lançamentos</a></li>
            <li><a href="#linkdodelivery">Delivery</a></li>
            <li><a href="#linkdocontato">Contato</a></li>
          </ul>
        </div>
        <a href="#login/cadastro>">Login/cadastro</a>
      </nav>
    </header>
  );
};

export default Cabecalho;

//exportar o cabeçalho, para ser emportado em outros aqrquivos caso necessário
// irei criar um evento nav para o cabeçalho e inserir o link de cada seçaõ, apenas o cardápio
//será funcional por enquanto
// utilizar ul para criar uma list