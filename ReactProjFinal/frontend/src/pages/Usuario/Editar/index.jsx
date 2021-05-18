import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

function EditarUsuario(props) {
  const [state, setState] = useState({
    usuario: {
      id: props.match.params.id,
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

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/usuarios/${id}`)
      .then((res) => {
        setState({usuario: {...res.data}});
        console.log(state)
      });
  }, []);


  const handleSubmit = (event) => {
    const req = state.usuario;
    const id = state.usuario.id
    axios({
      method: "put",
      url: `http://localhost:3303/ordemservico/editarUsuario/${id}`,
      data: req,
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        if (data) {
          alert("Dados editados com sucesso");
          setRedirect(true);
        }
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  };

  return (
    <>
      {redirect ? <Redirect to={`/detalhesUsuario/${state.usuario.id}`} /> : null}
        <div className="d-flex align-items-center justify-content-between">
          <h3>Adicionar</h3>
          <p>
            <Link to="/usuarios" className="btn btn-success mt-3">
              Voltar
            </Link>
          </p>
        </div>
      <div className="form">
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
              checked={state.usuario.admin === "true" || state.usuario.admin === true}
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
              checked={state.usuario.admin === "false" ||  state.usuario.admin === false}
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

export default EditarUsuario;
