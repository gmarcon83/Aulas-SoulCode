import axios from "axios";
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

function InserirUsuario(props) {
  const [state, setState] = useState({
    usuario: {
      login: "",
      senha: "",
      admin: true,
    },
  });

  const [redirect, setRedirect] = useState(false);

  const handeInputChange = (ev) => {
    const target = ev.target;
    const name = target.name;
    const value = target.value;

    setState({ usuario: { ...state.usuario, [name]: value } });
  };

  const handleSubmit = (event) => {
    const req = state.usuario;
    axios({
      method: "post",
      url: "http://localhost:3303/ordemservico/usuarios",
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
      {redirect ? <Redirect to="/usuarios" /> : null}
      <div className="form">
        <div className="d-flex align-items-center justify-content-between">
          <h3>Adicionar</h3>
          <p>
            <Link to="/usuarios" className="btn btn-success mt-3">
              Voltar
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              name="login"
              className="form-control"
              placeholder="Login"
              value={state.usuario.login}
              onChange={handeInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              className="form-control"
              placeholder="Senha"
              value={state.usuario.senha}
              onChange={handeInputChange}
              required
            />
          </div>

          <div className="col-md-3 form-group my-2">
            <label htmlFor="Admin">Admin</label>
            <input
              type="radio"
              name="admin"
              className="col-md-3"
              placeholder="Admin"
              value="true"
              checked={state.usuario.admin === "true"}
              onChange={handeInputChange}
              required
            />

            <label htmlFor="">Usuário</label>
            <input
              type="radio"
              name="admin"
              className="col-md-3"
              placeholder="Colab"
              value="false"
              checked={state.usuario.admin === "false"}
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

export default InserirUsuario;
