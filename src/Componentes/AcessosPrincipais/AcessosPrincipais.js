import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const Acesso = () => {
  return (
    <div className="AcessosRapidos">
      <div>
        <img src="acessoCard.svg" alt="Acessar Cardápio" />
        <Link to="/cardapio" className="acessarCardapio"> Acessar Cardápio</Link>
      </div>
      <div>
        <img src="FazerPedido.svg" alt="Fazer Pedido" />
        <button className="acessarCardapio"> Fazer Pedido</button>
      </div>
      <div>
        <img src="MoreAbout.svg" alt="Saiba Mais..." />
        <button className="acessarCardapio"> Saiba Mais...</button>
      </div>
    </div>
  );
};

export default Acesso;