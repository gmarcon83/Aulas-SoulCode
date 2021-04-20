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

              )
            ) : (
              <p>Sem dados</p>
            )
          }


          <tr>
            <td>Nome</td>
            <td>R$ 0</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TabelaProduto;
