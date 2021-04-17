import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function FormDados() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    password: "",
  });
  const [confirm, setConfirm] = useState("");

  const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
  };

  function enviarDados(event) {
    setConfirm(`Dados Enviados! Nome:${dados.nome} Email: ${dados.email}`);
    event.preventDefault(); //Cancela o submit
  }

  return (
    <>
      <PageTitle title="Formulário" subtitle="Estado Dinâmico" />

      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <form onSubmit={enviarDados}>
          <input
            type="text"
            name="nome"
            placeholder="nome"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputChange}
          />
          <br></br>
          <button type="submit">Enviar</button>
        </form>
        <p>{confirm}</p>
      </div>
    </>
  );
}

export default FormDados;
