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

  function ValidaSenha1({ senha }) {
    console.log("Validando1")
    if (senha === "") return <span>Preencha o campo</span>;
    if (senha.length <= 5) return <span>Senha com no mínimo 6 caracteres</span>;
    return <span>Senha Válida</span>;
  }

  //Roda caso tenha mudança na variavel
  const validaSenha1 = useMemo(
    ()=>{
      return <ValidaSenha1 senha={dados.senha1} />
    },[dados.senha1]//Variável que precisa mudar
  )

  function ValidaSenha2({ senha1, senha2 }) {
    console.log("Validando2")
    if (senha2 === "") return <span> </span>;
    if (senha1 !== senha2) return <span>Senhas Diferentes</span>;
    return <span>Senha Válida</span>;
  }

  const validaSenha2 = useMemo(
    ()=>{
      return <ValidaSenha2 senha1={dados.senha1} senha2={dados.senha2}/>
    },[dados.senha2, dados.senha1]//Variável que precisa mudar
  )


  return (
    <>
      <PageTitle title="useMemo" subtitle="Usado para evitar chamadas desnecessárias de funções" />

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
          {validaSenha1}
          <input
            type="password"
            name="senha1"
            placeholder="password"
            value={dados.password}
            onChange={handleInputChange}
          />
          {validaSenha2}
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
