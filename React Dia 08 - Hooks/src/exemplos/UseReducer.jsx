import React, { useReducer } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function UseReducer() {
  const valorInicial = 0;

  function reducer(state, action) {
    switch (action) {
      case "add":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(reducer, valorInicial);

  // Valor inicial do reducer EX 2
  const produto ={
    nome: "Nintendo Switch",
    preco: 3000
  };

  // State = produto / Action o valor do dispatch2
  function descontos(state, action){
    switch (action){
      case '10': return {...state, preco: (state.preco * 0.9)}
      case '25': return {...state, preco: (state.preco * 0.75)}
      default: return {...state, preco: 3000}
    }
  }

  // desconto é um estado que tem o valor de produto
  const[desconto, dispatch2] = useReducer(descontos, produto);

  return (
    <>
      <PageTitle title="useReducer" subtitle="" />
      <SectionTitle title="Exemplo 1" />
      <div>
        <p>{state}</p>
        <button onClick={
          ()=>dispatch("add")
        }>Add</button>
        <button onClick={
          ()=>dispatch("dec")
        }>Dec</button>
        <button onClick={
          ()=>dispatch("")
        }>Clear</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <SectionTitle title="Exemplo 2" />
      <div>
        <p>{desconto.nome}</p>
        <p>{desconto.preco}</p>
        <button onClick={
          ()=>dispatch2("10")
        }>10%</button>
        <button onClick={
          ()=>dispatch2("25")
        }>25%</button>
        <button onClick={
          ()=>dispatch2("")
        }>Clear</button>
      </div>
    </>
  );
}

export default UseReducer;
