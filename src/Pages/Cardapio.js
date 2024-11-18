import React from "react";
import HeaderCardapio from "../Componentes/Cardapio Cabecalho/HeaderCardapio.js";
import PromoCardapio from "../Componentes/Cardapio Promocao/PromoCardapio.js";
import ValoresCardapio from "../Componentes/Cardapio Valores/ValoresCardapio.js";

function Cardapio() {
  return (
    <div className="divcardapio">
      <header className="cardapioHeader">
        <div className="Cardapio">

          <HeaderCardapio />

          <PromoCardapio />

          <ValoresCardapio />

        </div>
      </header>
    </div>
  );
}

export default Cardapio;

