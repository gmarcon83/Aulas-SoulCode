import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";

function EditarCliente(props) {
  const [state, setState] = useState({
    cliente: {
      id: props.match.params.id,
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

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`http://localhost:3303/ordemservico/clientes/${id}`)
      .then((res) => {
        setState({cliente: {...res.data}});
        console.log(state)
      });
  }, []);


  const handleSubmit = (event) => {
    const req = state.cliente;
    const id = state.cliente.id
    axios({
      method: "put",
      url: `http://localhost:3303/ordemservico/editarCliente/${id}`,
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
      {redirect ? <Redirect to={`/detalhesCliente/${state.cliente.id}`} /> : null}
        <div className="d-flex align-items-center justify-content-between">
          <h3>Adicionar</h3>
          <p>
            <Link to="/clientes" className="btn btn-success mt-3">
              Voltar
            </Link>
          </p>
        </div>
      <div className="form">
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

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Alterar
          </button>
        </form>
      </div>
    </>
  );
}

export default EditarCliente;
