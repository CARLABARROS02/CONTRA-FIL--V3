import React from "react";
import './index.css'



const Acesso = () => {
  return (
    <div className="AcessosRapidos">
      <div>
        <img src="acessoCard.svg" alt="Acessar Cardápio" />
        <button className="acessarCardapio"> Acessar Cardápio </button>
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