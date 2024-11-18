import React from 'react'
import './index.css'

//criando uma função de Lançamento: const: LaunchSection()
//criar um array/coleção de dados e cada objeto terá um nome e uma imagem
// Usando a tag <section> para definir uma seção do site e adicionando a classe 'launch-section' para estilização específica
// Div para agrupar os lançamentos, usando a classe 'launch-list' para estilização e irei mapear o array de lançamentos para renderizar cada item dinamicamente
// Usando 'key' como 'index' para identificar cada elemento de forma única

const Nossoslancamentos = () => {

  const launches = [
    { name: 'Penne ao Pesto', image: 'penne.svg' },
    { name: 'Moqueca de Berinjela', image: 'moqueca.svg' },
    { name: 'Risoto com Pequi', image: 'risoto.svg' },
    { name: 'Carne de Jaca', image: 'carne.svg' },
  ];

  return (
    <section className="launch-section">
      <div className="text-header">
        <h2>Nossos Lançamentos:</h2>
      </div>
      <div className="launch-list">
        {launches.map((item, index) => (
          <div key={index} className="launch-item">
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Nossoslancamentos;