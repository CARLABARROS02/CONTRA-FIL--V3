import React from "react"; //importar o react
import './index.css'

const HeaderCardapio = () => {
    return (
<header className="headercard">

<div className="logo">      
    <nav>
        <a href="App.js"> Voltar a Página Inicial </a>
        <img src="logo-contra-file-horizontal.png" alt="Contra Filé"></img>
        <a href="#Link do Carrinho#"> Ver Carrinho </a>
    </nav>
      </div>

</header>
    );
};

export default HeaderCardapio;
