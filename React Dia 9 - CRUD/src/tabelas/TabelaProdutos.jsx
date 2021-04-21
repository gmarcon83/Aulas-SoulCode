import React from "react";

function TabelaProduto(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Produto</td>
            <td>Preço</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {
            props.produtos.length > 0 ? (
              props.produtos.map(
                (produto) => (
                  <tr key={produto.id}>
                  <td>{produto.nomeProduto}</td>
                  <td>R$ {produto.preco}</td>
                  <td>
                    <button>Editar</button>
                    <button onClick={() => props.deletarProduto(produto.id)}>Excluir</button>
                  </td>
                </tr>
                )
              )
            ) : (
              <tr>
                <td>Sem Produtos</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default TabelaProduto;
