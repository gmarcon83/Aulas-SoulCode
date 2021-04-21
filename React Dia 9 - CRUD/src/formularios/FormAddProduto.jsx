import React, { useState } from "react";

const valorInicial = { id: null, nomeProduto: "", preco: 0 };

function FormAddProduto(props) {
  const [produto, setProduto] = useState(valorInicial);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!produto.nomeProduto || !produto.preco) return;
          props.addProduto(produto);
          setProduto(valorInicial);
        }}
      >
        <label>Nome do Produto</label>
        <input
          type="text"
          name="nomeProduto"
          value={produto.nomeProduto}
          onChange={handleInputChange}
        />
        <label>Preço</label>
        <input
          type="number"
          name="preco"
          value={produto.preco}
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default FormAddProduto;
