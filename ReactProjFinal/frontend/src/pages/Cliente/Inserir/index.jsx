import axios from "axios";
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function InserirCliente(props) {
  const [state, setState] = useState({
    cliente: {
      nome: "",
      telefone: "",
    },
  });

  const [redirect, setRedirect] = useState(false);

  const handeInputChange = (ev) => {
    const target = ev.target;
    const name = target.name;
    const value = target.value;

    setState({ cliente: { ...state.cliente, [name]: value } });
  };

  const handleSubmit = (event) => {
    const req = state.cliente;
    axios({
      method: "post",
      url: "http://localhost:3303/ordemservico/clientes",
      data: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        if (data) {
          alert("Dados inseridos com sucesso");
          setRedirect(true);
        }
      })
      .catch(() => console.log("Erro ao inserir dados"));
      event.preventDefault();
  };

  return (
    <>
      {redirect ? <Redirect to="/clientes" /> : null}
      <div className="form">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Adicionar</h3>
          <p>
            <Link to="/clientes" className="btn btn-success mt-3">
              Voltar
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              placeholder="Nome"
              value={state.cliente.nome}
              onChange={handeInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="telefone"
              className="form-control"
              placeholder="Telefone"
              value={state.cliente.telefone}
              onChange={handeInputChange}
              required
            />
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Adicionar
          </button>
        </form>
      </div>
    </>
  );
}

export default InserirCliente;
