import React, { useMemo, useState } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function UseMemo() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    senha1: "",
    senha2: "",
  });

  const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
    console.log(dados);
  };

  function ValidaSenha({ senha }) {
    console.log("Validando")
    if (senha === "") return <span>Preencha o campo</span>;
    if (senha.length <= 5) return <span>Senha com no mínimo 6 caracteres</span>;
    return <span>Senha Valida</span>;
  }

  //Roda caso tenha mudança na variavel
  const validaSenha = useMemo(
    ()=>{
      return <ValidaSenha senha={dados.senha1} />
    },[dados.senha1]//Variável que precisa mudar
  )

  return (
    <>
      <PageTitle title="useMemo" subtitle="Exemplo de Uso" />

      <SectionTitle title="Exemplo 1" />
      <div className="center">
        <form>
          <input
            type="text"
            name="nome"
            placeholder="nome"
            value={dados.nome}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={dados.email}
            onChange={handleInputChange}
          />
          {validaSenha}
          <input
            type="password"
            name="senha1"
            placeholder="password"
            value={dados.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="senha2"
            placeholder="password"
            value={dados.password}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}

export default UseMemo;
