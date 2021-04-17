import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function UseState() {
  // const [nomeEstado, setNomeEstado] = useState(ValorInicial)
  //            ↑            ↑
  //        NomeFunc    NomeSetter
  const [count, setCount] = useState(0);

  const [dados, setDados] = useState({
    nome: "Romero",
    idade: 92,
  });

  const [carro, setCarro] = useState({
    marca: "Ford",
    modelo: "Ka",
    cor: "Azul"
  });

  //Com uma outra função
  function add() {
    setCount(count + 1);
  }

  return (
    <>
      <PageTitle title="UseState" subtitle="Cria estados na função" />

      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <button onClick={add}> + 1</button>
        <p>Contador: {count}</p>
        {/* Com Arrow function */}
        <button onClick={() => setCount(count - 1)}> - 1</button>
      </div>

      <SectionTitle title="Exemplo 2" />
      <div className="center">
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <button
          onClick={() =>
            setDados({
              // Faz um spread dos valores antigos para não perder eles
              ...dados,
              idade: 35,
            })
          }
        >
          Trocar
        </button>
      </div>

      <SectionTitle title="Exercício 1" />
      <div className="center">
        <p>Marca: {carro.marca}</p>
        <p>Modelo: {carro.modelo}</p>
        <p>Cor: {carro.cor}</p>
        <button
          onClick={() =>
            setCarro({
              marca: "Kia",
              modelo: "Cerato",
              cor: "Vermelho"
            })
          }
        >
          Trocar
        </button>
      </div>


    </>
  );
}

export default UseState;
