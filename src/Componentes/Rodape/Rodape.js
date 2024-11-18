import React from 'react';
import './index.css'

// Definindo o componente Footer/Rodape como uma função
//tag <footer> para definir a seção do rodapé do site e adicionar uma classe para estilização específica

const Rodape = () => {
  return (
    <footer className="rodape">
      <div>
        <img src="logorodape.svg" alt="" />
      </div>
      <div>
        <p>Horário de funcionamento: 11:00 -  15:00 de Seg a Sáb.</p>
        <div className='container-rodape'>
          <div className='social-media'>
            <img src="inst.svg" alt="" />
            <p>@Contra_o_file</p>
          </div>
          <div className='social-media'>
            <img src="wpp.svg" alt="" />
            <p>(16) 98765-1234</p>
          </div>
          <div className='social-media'>
            <img src="face.svg" alt="" />
            <p>@Contra_o_file</p>
          </div>
        </div>
      </div>
      <div>
        <p>Rua Alfredo Lopes 1717 - CEP 13560460</p>
        <div className='container-rodape'>
          <div>
            <p>Politica de Privacidade</p>
          </div>
          <div>
            <p>Trabalhe conosco</p>
          </div>
          <div>
            <p>Saiba mais sobre Ser Vegano</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Rodape;