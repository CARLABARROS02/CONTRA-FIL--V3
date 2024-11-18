import React from 'react';

// Primeiro vou definir um array de objetos 'pratos', onde cada objeto representa um prato do cardápio:

const ValoresCardapio = () => {
  const pratos = [
    { id: 1, nome: 'Salada de grão-de-bico e legumes', preco: 35.99, imagem: 'salada.jpg' },
    { id: 2, nome: 'Tartar Vegano de Cenoura', preco: 32.99, imagem: 'tartar.jpg' },
    { id: 3, nome: 'Bowl de Legumes com Creme Azedo', preco: 44.99, imagem: 'bowl.jpg' },
    { id: 4, nome: 'Berinjela Cremosa com Molho de Tomate e Curry', preco: 44.99, imagem: 'berinjela.jpg' },
    { id: 5, nome: 'Tomate Recheado com Arroz - 7 Cereais', preco: 32.99, imagem: 'tomate.jpg' },
    { id: 6, nome: 'Torta Cremosa Vegana - Recheio de Tofu e Vegetais', preco: 54.99, imagem: 'torta.jpg' },
    { id: 7, nome: 'Sanduíche Vegano com Abobrinha', preco: 19.99, imagem: 'sanduiche.jpg' },
    { id: 8, nome: 'Smoothie de Manga', preco: 35.99, imagem: 'smoothie.jpg' },
    { id: 9, nome: 'Mousse de Chocolate Vegano', preco: 19.99, imagem: 'mousse.jpg' },
  ];

   //Itera sobre o array 'pratos' e cria um card para cada prato: usando pratos.map((prato) e cada um vai ter uma Key única
   //Renderiza a imagem do prato <img src={require, Renderiza o nome do prato <h3>{prato.nome}, Renderiza o preço do prato <p>R$ {prato.
   // irei adicionar um botão de colocar item no carrinho

  return (
    <div className="cardapio">
     
      {pratos.map((prato) => (

        <div key={prato.id} className="card"> 

          <img src={require(`../images/${prato.imagem}`)} alt={prato.nome} className="card-img" />

          <h3>{prato.nome}</h3>

          <p>R$ {prato.preco.toFixed(2)}</p>
        
          <button className="adicionarCarrinho">Adicionar no carrinho</button>

        </div>
      ))}
    </div>
  );
};

export default ValoresCardapio; // Exporta o componente para ser usado em outras partes da aplicação
