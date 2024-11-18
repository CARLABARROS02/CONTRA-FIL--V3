import React from "react";
import HeaderCardapio from "./Componentes/Cardapio Cabecalho/HeaderCardapio";
import PromoCardapio from "./Componentes/Cardapio Promocao/PromoCardapio";
import ValoresCardapio from "./Componentes/Cardapio Valores/ValoresCardapio";

function CARDAPIO() {
    return (
      <div className="divcardapio">
        <header className="cardapioHeader">
        <div className="Cardapio">

 <HeaderCardapio/>

<PromoCardapio/>

<ValoresCardapio/>
  
          </div>
        </header>
      </div>
    );
  }
  
  export default CARDAPIO;

