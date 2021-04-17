import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function UseEffect() {
  const [texto, setTexto] = useState("Inicial");
  const [count, setCount] = useState(1);
  const [verifica, setVerifica] = useState("Me chamou renderizou");
  const [status, setStatus] = useState("Ímpar");

  // Roda quando o componente é criado ou atualizado
  useEffect(
    () => {
      setVerifica(`Renderizou ${count} vezes`);
    },
    [count] //Passa a variavel usada tb para evitar loop
  );

  useEffect(() => {
    setStatus(count % 2 === 0 ? "Par" : "Ímpar");
  }, [count]);

  return (
    <>
      <PageTitle
        title="useEffect"
        subtitle="Executa efeitos colaterais nos componentes"
      />

      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <p>Texto: {texto}</p>
        <p>Quantas vezes: {count}</p>
        <button
          onClick={() => {
            setTexto("Mudado");
            setCount(count + 1);
          }}
        >
          Muda
        </button>
        <p>Estado verifica: {verifica}</p>
        <p>Status do count: {status}</p>
      </div>
    </>
  );
}

export default UseEffect;
