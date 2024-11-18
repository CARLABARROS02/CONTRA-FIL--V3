import React from "react"; //importar o react
import './index.css'
import { Link } from "react-router-dom";

const HeaderCardapio = () => {
    return (
<header className="headercard">

<div className="cabecalho">      
    <nav>
        <Link to='/'> Voltar a Página Inicial </Link>
        <img src="logo-contra-file-horizontal.png" alt="Contra Filé"></img>
        <a href="#Link do Carrinho#"> Ver Carrinho </a>
    </nav>
      </div>

</header>
    );
};

export default HeaderCardapio;

