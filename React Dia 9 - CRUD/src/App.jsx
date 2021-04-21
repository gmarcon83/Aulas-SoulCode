import React, { useState } from "react";
import FormAddProduto from "./formularios/FormAddProduto";
import TabelaProduto from "./tabelas/TabelaProdutos";

const dadosProdutos = [
  { id: 1, nomeProduto: "Xbox", preco: 5000 },
  { id: 2, nomeProduto: "GBA", preco: 1000 },
  { id: 3, nomeProduto: "Nintendinho", preco: 500 },
  { id: 4, nomeProduto: "Playstation", preco: 4200 },
];

function App() {
  const [produtos, setProdutos] = useState(dadosProdutos);
  // Função de adicionar
  function addProduto(produto) {
    produto.id = produtos.length + 1;
    setProdutos([...produtos, produto]);
  }

  // Função de deletar
  function deletarProduto(id) {
    setProdutos(
      produtos.filter(
        (produto) => produto.id !== id
      )
    )
  }

  return (
    <div className="container">
      <h1>Meu CRUD - Produtos</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h1>Adicionar Produto</h1>
          <FormAddProduto addProduto={addProduto}/>
        </div>
        <div className="flex-large">
          <h1>Lista de Produtos</h1>
          <TabelaProduto produtos={produtos} deletarProduto={deletarProduto}/>
        </div>
      </div>
    </div>
  );
}

export default App;
